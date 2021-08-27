import { Text, View} from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import classNames from "classnames";
import React, { ReactElement } from "react";
import { BiHappy, BiHeart, BiMessage } from "react-icons/bi";
import styles from "./style.module.scss";

const NavItem = (props: {
  icon: ReactElement;
  name: string;
}) => {
  return (
    <View className={styles.item_wrap}>
      {props.icon}
      <Text className={styles.item_name}>{props.name}</Text>
    </View>
  );
};

const BottomNavBar = (props: ViewProps) => {
  const NAV_CONFIG = [
    {
      icon: BiHeart,
      name: "寻觅"
    },
    {
      icon: BiMessage,
      name: "消息"
    },
    { icon: BiHappy, name: "我的" }
  ];
  return (
    <View {...props} className={classNames(styles.wrapper, props.className)}>
      {NAV_CONFIG.map((config, index) => {
        const className = classNames(styles.item_icon, {
          [styles["is-active"]]: index === 0
        });
        const icon = <config.icon size={24} className={className} />;
        return <NavItem key={config.name} {...config} icon={icon} />;
      })}
    </View>
  );
};

export default BottomNavBar;
