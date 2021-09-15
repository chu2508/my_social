import { ICallCount } from "./ICallCount";

export interface ICallCounterService {
  getCount(): Promise<ICallCount>;
}
