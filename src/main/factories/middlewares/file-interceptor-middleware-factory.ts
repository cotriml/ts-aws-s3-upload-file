import { Middleware } from '@/presentation/protocols'
import { FileInterceptorMiddleware } from '@/presentation/middlewares'
import { makeStInterceptFile } from '@/main/factories'

export const makeFileInterceptorMiddleware = (): Middleware => {
  return new FileInterceptorMiddleware(makeStInterceptFile())
}
