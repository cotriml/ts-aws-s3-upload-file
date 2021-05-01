import { HttpResponse, Middleware } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { InterceptFile } from '@/domain/usecases'

export class FileInterceptorMiddleware implements Middleware {
  constructor (
    private readonly interceptFile: InterceptFile
  ) { }

  async handle (): Promise<HttpResponse> {
    try {
      const res = await this.interceptFile.intercept()
      return ok(res)
    } catch (error) {
      return serverError(error)
    }
  }
}
