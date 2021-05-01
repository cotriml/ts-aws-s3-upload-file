export interface InterceptFile {
  intercept: () => Promise<InterceptFile.Result>
}

export namespace InterceptFile {
  export type Result = Function
}
