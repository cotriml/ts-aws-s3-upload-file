import { StUploadFile } from '@/data/usecases'
import { mockUploadFileParams, throwError } from '@/tests/domain/mocks'
import { UploadFileStorageSpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: StUploadFile
  uploadFileStorageSpy: UploadFileStorageSpy
}

const makeSut = (): SutTypes => {
  const uploadFileStorageSpy = new UploadFileStorageSpy()
  const sut = new StUploadFile(uploadFileStorageSpy)
  return {
    sut,
    uploadFileStorageSpy
  }
}

describe('StUploadFile Usecase', () => {
  test('Should call UploadFileStorage with correct values', async () => {
    const { sut, uploadFileStorageSpy } = makeSut()
    const uploadFileParams = mockUploadFileParams()
    await sut.upload(uploadFileParams)
    expect(uploadFileStorageSpy.uploadFileParams).toEqual(uploadFileParams)
  })

  test('Should throw if UploadFileStorage throws', async () => {
    const { sut, uploadFileStorageSpy } = makeSut()
    jest.spyOn(uploadFileStorageSpy, 'upload').mockImplementationOnce(throwError)
    const promise = sut.upload(mockUploadFileParams())
    await expect(promise).rejects.toThrow()
  })

  test('Should return file info on success', async () => {
    const { sut, uploadFileStorageSpy } = makeSut()
    const tool = await sut.upload(mockUploadFileParams())
    expect(tool).toBeTruthy()
    expect(tool).toEqual(uploadFileStorageSpy.result)
  })
})
