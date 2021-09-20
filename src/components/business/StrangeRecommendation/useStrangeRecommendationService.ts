import makePersonalInfo from "@src/mock/makePersonalInfo";
import getServiceToken from "@src/tools/getServiceToken";
import { useState } from "react";

const mockData = makePersonalInfo();
/**
 * 陌生人推荐服务
 * @returns 返回陌生人列表，喜欢或不喜欢接口以及count记数
 */
export default function useStrangeRecommendationService() {
  const [people, setPeople] = useState(mockData);
  const person = people.find(p => p.likeStatus === null) ?? null;
  const { likeTotal, notLikeTotal, usedTotal } = people.reduce(
    (total, cur) => {
      if (cur.likeStatus === true) {
        total.likeTotal++;
      }
      if (cur.likeStatus === false) {
        total.notLikeTotal++;
      }
      if (cur.likeStatus === null) {
        total.usedTotal++;
      }
      return total;
    },
    { likeTotal: 0, notLikeTotal: 0, usedTotal: 0 }
  );

  const like = (id: string) => {
    return setPeople(state => {
      const p = state.find(item => item.id === id);
      if (p) p.likeStatus = true;
      return [...state];
    });
  };

  const notLike = (id: string) => {
    return setPeople(state => {
      const p = state.find(item => item.id === id);
      if (p) p.likeStatus = true;
      return [...state];
    });
  };
  return { people, person, like, notLike, likeTotal, notLikeTotal, usedTotal };
}

export const StrangeRecommendationService = getServiceToken(
  useStrangeRecommendationService
);
