import makePersonalInfo from "@src/mock/makePersonalInfo";
import getServiceToken from "@src/tools/getServiceToken";
import { useState } from "react";

export default function useFriendsService() {
  const [friends, setFriends] = useState(makePersonalInfo());
  return {
    friends
  };
}

export const FriendsService = getServiceToken(useFriendsService);
