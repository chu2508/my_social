export interface ICacheManager {
  get<T = any>(key: string): T | null
  set(key: string, value: any): void;
}