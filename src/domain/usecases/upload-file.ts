export interface UploadFile {
  upload: (data: UploadFile.Params) => Promise<UploadFile.Result>
}

export namespace UploadFile {
  export type Result = any
  export type Params = {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    buffer: ArrayBuffer
    size: number
  }
}
