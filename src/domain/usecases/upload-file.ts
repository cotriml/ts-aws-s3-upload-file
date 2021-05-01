import { FileModel } from '@/domain/models'

export interface UploadFile {
  upload: (data: UploadFile.Params) => Promise<UploadFile.Result>
}

export namespace UploadFile {
  export type Result = any
  export type Params = FileModel
}
