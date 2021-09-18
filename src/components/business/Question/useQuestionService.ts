import { eventCenter } from "@tarojs/taro";
import { useEffect, useState } from "react";

enum QuestionStatus {
  PENDING
}
const mockData = Array.from({ length: 10 }, (_, key) => {
  return {
    id: key + 1,
    name: "任务" + key,
    reward: "+60青藤币",
    status: QuestionStatus.PENDING,
    action: {
      type: "navigate",
      url: "/pages/home/index"
    }
  };
});

/**
 * 任务服务
 */
export function useQuestionService() {
  const [question, setQuestion] = useState(mockData);
  
  return { question };
}
