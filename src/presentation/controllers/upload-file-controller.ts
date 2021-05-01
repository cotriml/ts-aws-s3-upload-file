import { Controller, HttpResponse } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { UploadFile } from '@/domain/usecases'

export class UploadFileController implements Controller {
  constructor (
    private readonly uploadFile: UploadFile
  ) { }

  async handle (request: UploadFileController.Request): Promise<HttpResponse> {
    try {
      const response = await this.uploadFile.upload(request.file)
      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace UploadFileController {
  export type Request = {
    file: UploadFile.Params
  }
}
