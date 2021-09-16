import { HomeService } from "@src/pages/home/hooks/useHomeService";
import { Text, View } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import Taro from "@tarojs/taro";
import classNames from "classnames";
import React, { ReactElement, useContext } from "react";
import { BiHappy, BiHeart, BiMessage } from "react-icons/bi";
import styles from "./style.module.scss";

interface NavItemProps extends ViewProps {
  icon: ReactElement;
  name: string;
  count?: number;
}

const NavItem = (props: NavItemProps) => {
  return (
    <View {...props} className={styles.item_wrap}>
      {!!props.count && <View>{props.count}</View>}
      {props.icon}
      <Text className={styles.item_name}>{props.name}</Text>
    </View>
  );
};

const NAV_CONFIG = [
  {
    icon: BiHeart,
    name: "寻觅",
    path: "/pages/home/index"
  },
  {
    icon: BiMessage,
    name: "消息",
    path: "/pages/chat/index"
  },
  { icon: BiHappy, name: "我的", path: "/pages/about/index" }
];
interface BottomNavBarProps extends ViewProps {
  activeIndex?: number;
}
const BottomNavBar = (props: BottomNavBarProps) => {
  const { activeIndex = 0 } = props;
  const { people, likeTotal, notLikeTotal } = useContext(HomeService);
  const count = people.length - likeTotal - notLikeTotal;

  const onNavClick = (path: string) => {
    Taro.navigateTo({ url: path });
  };

  return (
    <View {...props} className={classNames(styles.wrapper, props.className)}>
      {NAV_CONFIG.map((config, index) => {
        const className = classNames(styles.item_icon, {
          [styles["is-active"]]: index === activeIndex
        });
        const icon = <config.icon size={24} className={className} />;
        return (
          <NavItem
            key={config.name}
            {...config}
            count={index === 0 ? count : undefined}
            icon={icon}
            onClick={() => onNavClick(config.path)}
          />
        );
      })}
    </View>
  );
};

export default BottomNavBar;
