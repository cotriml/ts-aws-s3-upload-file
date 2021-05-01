import { Middleware } from '@/presentation/protocols'
import { NextFunction, Request, Response } from 'express'

export const adaptMulterMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpResponse = await middleware.handle(req, res)

    if (httpResponse.statusCode === 200) {
      await httpResponse.body(req, res, (error) => {
        if (error) {
          res.status(400).json(error)
        } else {
          next()
        }
      })
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
