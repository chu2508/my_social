import { ICacheManager } from "../types/cache/ICacheManager";
import { ICallCount } from "../types/counter/ICallCount";
import { ICallCounterService } from "../types/counter/ICallCountService";
import { IHttpClient } from "../types/net/IHttpClient";

export class CallCountService implements ICallCounterService {
  constructor(private cache: ICacheManager, private http: IHttpClient) {}
  async getCount() {
    let res = this.cache.get<ICallCount>("callCount");
    if (res === null) {
      res = await this.http.get("/callCount") as ICallCount;
    }
    return res;
  }
}
