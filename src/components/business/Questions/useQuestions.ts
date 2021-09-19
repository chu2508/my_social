import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";

enum QuestionStatus {
  PENDING,
  RESOLVED,
  CONFIRMED
}
const createMockData = () => {
  const mockData = Array.from({ length: 10 }, (_, key) => {
    return {
      id: String(key + 1),
      name: "任务" + key,
      reward: "+60青藤币",
      status: QuestionStatus.PENDING,
      action: {
        type: "navigate",
        url: "/pages/home/index"
      },
      get isResolve() {
        return this.status === QuestionStatus.RESOLVED;
      },
      get isPending() {
        return this.status === QuestionStatus.PENDING;
      },
      confirm(this: { status: QuestionStatus }) {
        if (this.status === QuestionStatus.RESOLVED) {
          this.status = QuestionStatus.CONFIRMED;
        }
      },
      execAction() {
        if (this.action.type === "navigate") {
          Taro.navigateTo({ url: this.action.url });
        }
      }
    };
  });
  return mockData;
};

/**
 * 任务服务，每次onShow函数触发，都会获取最新的任务状态
 * @returns
 */
export function useQuestions() {
  const [questions, setQuestions] = useState(createMockData());
  const firstQuestion = questions.find(question => question.isPending);
  const confirmQuestion = (question: any) => {
    setQuestions(state => {
      if (question) {
        question.confirm();
        return [...state];
      }
      return state;
    });
  };

  useDidShow(() => {
    setQuestions(createMockData());
  });

  return { questions, confirmQuestion, firstQuestion };
}
