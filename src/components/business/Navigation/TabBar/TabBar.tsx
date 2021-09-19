import { Text, View } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import classNames from "classnames";
import { ReactElement } from "react";
import styles from "./style.module.scss";
import useTabBar from "./useTabBar";

interface NavItemProps extends ViewProps {
  icon: ReactElement;
  name: string;
  count?: number;
}

const NavItem = (props: NavItemProps) => {
  return (
    <View {...props} className={styles.item_wrap}>
      <View className={styles.item}>
        {!!props.count && <View className={styles.badge}>{props.count}</View>}
        {props.icon}
        <Text className={styles.item_name}>{props.name}</Text>
      </View>
    </View>
  );
};

interface TabBarProps extends ViewProps {
  activeIndex?: number;
}
const TabBar = (props: TabBarProps) => {
  const { activeIndex = 0 } = props;
  const { navItems, usedTotal, onNavClick } = useTabBar();

  return (
    <View {...props} className={classNames(styles.wrapper, props.className)}>
      {navItems.map((config, index) => {
        const className = classNames(styles.item_icon, {
          [styles["is-active"]]: index === activeIndex
        });
        const icon = <config.icon size={24} className={className} />;
        return (
          <NavItem
            key={config.name}
            {...config}
            count={index === 0 ? usedTotal : undefined}
            icon={icon}
            onClick={() => onNavClick(config.path)}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
