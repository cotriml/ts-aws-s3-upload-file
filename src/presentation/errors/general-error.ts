export class GeneralError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'GeneralError'
  }
}
