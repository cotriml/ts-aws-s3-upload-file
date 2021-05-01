import { Controller, HttpResponse } from '@/presentation/protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers'
import { UploadFile } from '@/domain/usecases'
import { InvalidParamError } from '../errors'

export class UploadFileController implements Controller {
  constructor (
    private readonly uploadFile: UploadFile
  ) { }

  async handle (request: UploadFileController.Request): Promise<HttpResponse> {
    try {
      const { file } = request
      if (file) {
        const response = await this.uploadFile.upload(request.file)
        return ok(response)
      } else {
        return badRequest(new InvalidParamError('file'))
      }
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
