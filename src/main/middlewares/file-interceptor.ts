import { adaptMulterMiddleware } from '@/main/adapters'
import { makeFileInterceptorMiddleware } from '@/main/factories'

export const fileInterceptor = adaptMulterMiddleware(makeFileInterceptorMiddleware())
