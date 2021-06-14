import { UploadFileStorage } from '@/data/protocols'
import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export class AwsS3Adapter implements UploadFileStorage {
  async upload (data: UploadFileStorage.Params): Promise<UploadFileStorage.Result> {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: data.originalname,
      Body: data.buffer
    }

    const response = await s3.upload(params).promise()
    return response
  }
}
