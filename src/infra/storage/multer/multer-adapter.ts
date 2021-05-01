import { FileInterceptor } from '@/data/protocols'
import multer, { memoryStorage } from 'multer'

export class MulterAdapter implements FileInterceptor {
  async intercept (): Promise<Function> {
    const storage = await memoryStorage()
    const upload = await multer({
      storage,
      limits: {
        fileSize: 1000000
      }
    }).single('file')

    return upload
  }
}
