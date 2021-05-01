import { UploadFile } from '@/domain/usecases'
import { StUploadFile } from '@/data/usecases'
import { AwsS3Adapter } from '@/infra/storage'

export const makeStUploadFile = (): UploadFile => {
  const awss3Adapter = new AwsS3Adapter()
  return new StUploadFile(awss3Adapter)
}
