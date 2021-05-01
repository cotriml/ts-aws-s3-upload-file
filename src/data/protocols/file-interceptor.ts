export interface FileInterceptor {
  intercept: () => Promise<Function>
}
