import IUserProfile from "@src/domain/types/IUserProfile";
import { useEffect, useState } from "react";
import { BiHeart, BiMessage, BiHappy } from "react-icons/bi";
import { useSelector } from "react-redux";

const NAV_CONFIG = [
  {
    icon: BiHeart,
    name: "寻觅",
    path: "/pages/home/index",
    accessed: true
  },
  {
    icon: BiMessage,
    name: "消息",
    path: "/pages/chat/index",
    accessed: false
  },
  { icon: BiHappy, name: "我的", path: "/pages/about/index", accessed: false }
];
const initConfig = NAV_CONFIG;

export default function useBottomBar() {
  const [config, setConfig] = useState(initConfig);
  const user = useSelector<any, IUserProfile>(s => s.auth.user);

  useEffect(() => {
    setConfig(stale => {
      stale = stale.map(item =>
        item.path !== "/pages/home/index"
          ? { ...item, accessed: user.isTourist }
          : item
      );
      return stale;
    });
  }, [user]);

  return {config};
}
