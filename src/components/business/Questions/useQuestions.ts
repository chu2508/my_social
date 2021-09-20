import getServiceToken from "@src/tools/getServiceToken";
import Taro from "@tarojs/taro";
import { useState } from "react";

enum QuestionStatus {
  PENDING,
  RESOLVED,
  RECEIVED
}

export class Question {
  id: string;
  name: string = "Q1";
  reward: string = "";
  status: QuestionStatus = QuestionStatus.PENDING;
  readonly action = {
    type: "navigate",
    url: "/pages/home/index"
  };
  get isResolved() {
    return this.status === QuestionStatus.RESOLVED;
  }
  get isPending() {
    return this.status === QuestionStatus.PENDING;
  }
  get isReceived() {
    return this.status === QuestionStatus.RECEIVED;
  }
  receive = () => {
    if (this.status === QuestionStatus.RESOLVED) {
      this.status = QuestionStatus.RECEIVED;
    }
  };
  execAction = () => {
    if (this.action.type === "navigate") {
      Taro.navigateTo({ url: this.action.url });
    }
  };
}

const createMockData = () => {
  const mockData = Array.from({ length: 10 }, (_, key) => {
    const q = new Question();
    q.id = String(key + 1);
    q.name = "任务" + key;
    q.reward = "+60青藤币";
    q.status = key % 2 === 0 ? QuestionStatus.RESOLVED : QuestionStatus.PENDING;
    return q;
  });
  return mockData;
};

/**
 * 任务服务，每次onShow函数触发，都会获取最新的任务状态
 * @returns
 */
export default function useQuestionsService() {
  const [questions, setQuestions] = useState(createMockData());
  const firstQuestion = questions
    .find(question => !question.isReceived);
  const receiveReward = (question: Question) => {
    setQuestions(state => {
      if (question) {
        question.receive();
        return [...state];
      }
      return state;
    });
  };

  return { questions, receiveReward, firstQuestion };
}

export const QuestionsService = getServiceToken(useQuestionsService);
