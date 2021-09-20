import { View } from "@tarojs/components";
import React, { useContext } from "react";
import Friend from "../Friend/Friend";
import { FriendsService } from "./useFriendsService";

const Friends = () => {
  const { friends } = useContext(FriendsService);
  return (
    <View>
      {friends.map((_, key) => (
        <Friend key={key} index={key} />
      ))}
    </View>
  );
};

export default Friends;
