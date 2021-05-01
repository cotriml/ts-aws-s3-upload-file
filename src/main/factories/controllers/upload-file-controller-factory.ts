import { makeStUploadFile } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UploadFileController } from '@/presentation/controllers'

export const makeUploadFileController = (): Controller => {
  return new UploadFileController(makeStUploadFile())
}
