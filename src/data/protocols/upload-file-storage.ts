import { UploadFile } from '@/domain/usecases'

export interface UploadFileStorage {
  upload: (data: UploadFileStorage.Params) => Promise<UploadFileStorage.Result>
}

export namespace UploadFileStorage {
  export type Result = any
  export type Params = UploadFile.Result
}