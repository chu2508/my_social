import IUserProfile from "@src/domain/types/IUserProfile";
import { RootState } from "@src/store/reducer";
import { Text, View } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import classNames from "classnames";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import useBottomBar from "./useBottomBar";

interface NavItemProps extends ViewProps {
  icon: ReactElement;
  name: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <View {...props} className={styles.item_wrap}>
      {props.icon}
      <Text className={styles.item_name}>{props.name}</Text>
    </View>
  );
};
interface BottomBarProps extends ViewProps {
  activeIndex?: number;
}
const BottomBar = (props: BottomBarProps) => {
  const { config } = useBottomBar();
  const { activeIndex = 0 } = props;
  const profile = useSelector<RootState, IUserProfile>(
    state => state.application.userProfile
  );

  const onNavClick = (path: string) => {
    Taro.navigateTo({ url: path });
  };

  return (
    <View {...props} className={classNames(styles.wrapper, props.className)}>
      {config.map((item, index) => {
        const className = classNames(styles.item_icon, {
          [styles["is-active"]]: index === activeIndex
        });
        const onClick = () => {
          if (profile.isTourist) {
            return Taro.showToast({
              duration: 5000,
              title: "Is tourist"
            });
          }
          onNavClick(item.path);
        };
        const icon = <item.icon size={24} className={className} />;
        return (
          <NavItem key={item.name} {...item} icon={icon} onClick={onClick} />
        );
      })}
    </View>
  );
};

export default BottomBar;
