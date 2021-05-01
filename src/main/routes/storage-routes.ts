import { adaptRoute } from '@/main/adapters'
import { makeUploadFileController } from '@/main/factories'
import { fileInterceptor } from '@/main/middlewares'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/upload', fileInterceptor, adaptRoute(makeUploadFileController()))
}
