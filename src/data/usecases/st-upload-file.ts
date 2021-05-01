import { UploadFileStorage } from '@/data/protocols'
import { UploadFile } from '@/domain/usecases'

export class StUploadFile implements UploadFile {
  constructor (
    private readonly uploadFileStorage: UploadFileStorage
  ) { }

  async upload (data: UploadFile.Params): Promise<UploadFile.Result> {
    return await this.uploadFileStorage.upload(data)
  }
}
