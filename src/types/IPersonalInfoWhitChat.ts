import { IPersonalInfoWhitRecommend } from "./IPersonalInfoWhitRecommend";

export default interface IPersonalInfoWhitChat
  extends IPersonalInfoWhitRecommend {
    lastMessage: {
      id: string;
      timestamp: number;
      content: string;
      type: string;
    }
  }
