import { AuthenticationService } from "@bis/Authentication/useAuthenticationService";
import { StrangeRecommendationService } from "@bis/StrangeRecommendation/useStrangeRecommendationService";
import Taro from "@tarojs/taro";
import { useContext } from "react";
import { BiHappy, BiHeart, BiMessage } from "react-icons/bi";

const NAV_CONFIG = [
  {
    icon: BiHeart,
    name: "寻觅",
    path: "/pages/home/index"
  },
  {
    icon: BiMessage,
    name: "消息",
    path: "/pages/communication/index"
  },
  { icon: BiHappy, name: "我的", path: "/pages/about/index" }
];

export default function useTabBar() {
  const { usedTotal } = useContext(StrangeRecommendationService);
  const { profile } = useContext(AuthenticationService);
  const onNavClick = (path: string) => {
    if (profile.isTourist) {
      // to dos something
    }
    Taro.switchTab({ url: path });
  };

  return {
    navItems: NAV_CONFIG,
    onNavClick,
    usedTotal
  };
}
