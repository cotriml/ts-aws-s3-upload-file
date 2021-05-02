import { UploadFile } from '@/domain/usecases'
import faker from 'faker'

export const mockUploadFileParams = (): UploadFile.Params => ({
  fieldname: faker.system.fileName(),
  originalname: faker.system.fileName(),
  encoding: faker.random.word(),
  mimetype: faker.system.mimeType(),
  buffer: Buffer.from(faker.image.image()),
  size: faker.datatype.number({ max: 1000000 })
})
