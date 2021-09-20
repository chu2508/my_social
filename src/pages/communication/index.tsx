import Friends from "@bis/Chat/Friends/Friends";
import useFriendsService, {
  FriendsService
} from "@bis/Chat/Friends/useFriendsService";
import { TabBar } from "@bis/index";
import { View } from "@tarojs/components";

const Communication = () => {
  const state = useFriendsService();
  return (
    <FriendsService.Provider value={state}>
      <View>
        <Friends />
        <TabBar activeIndex={1} />
      </View>
    </FriendsService.Provider>
  );
};

export default Communication;
