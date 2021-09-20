import { Image, View } from "@tarojs/components";
import { useContext } from "react";
import { FriendsService } from "../Friends/useFriendsService";

const Friend = (props: { index: number }) => {
  const { friends } = useContext(FriendsService);
  const person = friends[props.index];
  return (
    <View style={{ display: "flex" }}>
      <Image
        src={person.avatar}
        style={{ width: "64px", height: "64px", borderRadius: "50%" }}
      />
      <View>{person.nickname}</View>
    </View>
  );
};

export default Friend;
