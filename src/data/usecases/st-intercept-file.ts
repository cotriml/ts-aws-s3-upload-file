import { FileInterceptor } from '@/data/protocols'
import { InterceptFile } from '@/domain/usecases'

export class StInterceptFile implements InterceptFile {
  constructor (
    private readonly fileInterceptor: FileInterceptor
  ) { }

  async intercept (): Promise<InterceptFile.Result> {
    return await this.fileInterceptor.intercept()
  }
}
