import { InterceptFile } from '@/domain/usecases'
import { StInterceptFile } from '@/data/usecases'
import { MulterAdapter } from '@/infra/storage'

export const makeStInterceptFile = (): InterceptFile => {
  const multerAdapter = new MulterAdapter()
  return new StInterceptFile(multerAdapter)
}
