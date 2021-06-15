import { UploadFile } from '@/domain/usecases'

export interface UploadFileStorage {
  upload: (data: UploadFileStorage.Params) => Promise<UploadFileStorage.Result>
}

export namespace UploadFileStorage {
  export type Result = UploadFile.Result
  export type Params = UploadFile.Params
}
