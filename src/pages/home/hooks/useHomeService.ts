import getServiceToken from "@src/tools/getServiceToken";
import { IPersonalInfoWhitSeek } from "@src/types/IPersonalInfoWhitSeek";
import { useState } from "react";

const mockData: IPersonalInfoWhitSeek[] = Array.from({ length: 5 }).map<
  IPersonalInfoWhitSeek
>((_, id) => {
  return {
    id: String(id + 1),
    likeStatus: null
  };
});
export default function useHomeService() {
  const [people, setPeople] = useState(mockData);
  const person = people.find(p => p.likeStatus === null) ?? null;
  const { likeTotal, notLikeTotal } = people.reduce(
    (total, cur) => {
      if (cur.likeStatus === true) {
        total.likeTotal++;
      }
      if (cur.likeStatus === false) {
        total.notLikeTotal++;
      }
      return total;
    },
    { likeTotal: 0, notLikeTotal: 0 }
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
  return { people, person, like, notLike, likeTotal, notLikeTotal };
}

export const HomeService = getServiceToken(useHomeService);
