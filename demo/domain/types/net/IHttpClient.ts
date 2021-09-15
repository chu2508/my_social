export interface IHttpClient {
  get<T = any>(path: string): Promise<T>
}