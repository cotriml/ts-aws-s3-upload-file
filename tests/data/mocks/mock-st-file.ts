import {
  UploadFileStorage
} from '@/data/protocols'

import faker from 'faker'

export class UploadFileStorageSpy implements UploadFileStorage {
  result = {
    Bucket: faker.random.word(),
    ETag: `"${faker.datatype.number()}"`,
    key: faker.random.word(),
    Key: faker.random.word(),
    Location: faker.internet.url()
  }
  uploadFileParams: UploadFileStorage.Params

  async upload (data: UploadFileStorage.Params): Promise<UploadFileStorage.Result> {
    this.uploadFileParams = data
    return this.result
  }
}
