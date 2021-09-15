import { createToken } from "demo/domain/core/inject";
import { CallCountService } from "demo/domain/services/CallCountService";
import { ICallCounterService } from "demo/domain/types/counter/ICallCountService";

export const createCallCountService = (): ICallCounterService => {
  // test mocked
  return new CallCountService(
    {
      get: () => null,
      set: () => {}
    },
    {
      get: async () => ({ countA: 1, countB: 2 } as any)
    }
  );
};

export const CallCountServiceToken = createToken(createCallCountService)