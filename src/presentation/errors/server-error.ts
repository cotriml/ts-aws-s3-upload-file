export class ServerError extends Error {
  constructor (message: string) {
    super(`Internal Server Error: ${message}`)
    this.name = 'ServerError'
    this.stack = message
  }
}
