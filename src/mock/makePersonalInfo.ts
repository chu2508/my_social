import { IPersonalInfoWhitRecommend } from "@src/types/IPersonalInfoWhitRecommend";
import faker from "faker";

export default function makePersonalInfo() {
  const mockData: IPersonalInfoWhitRecommend[] = Array.from({ length: 5 }).map<
    IPersonalInfoWhitRecommend
  >((_, id) => {
    return {
      id: String(id + 1),
      nickname: faker.name.firstName(),
      avatar: faker.image.avatar(),
      likeStatus: null
    };
  });
  return mockData;
}
