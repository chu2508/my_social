import { BottomNavBar } from "@src/components/business";
import PersonalInfo from "@src/components/business/PersonalInfo";
import { View } from "@tarojs/components";
import classNames from "classnames";
import BottomOperator from "./components/BottomOperator";
import useScrollDirection from "./hooks/useScrollDirection";
import styles from "./style.module.scss";

const Home = () => {
  const scrollDirection = useScrollDirection();
  return (
    <View className={styles.page}>
      <PersonalInfo />
      <View
        className={classNames(styles.bottom_nav, {
          [styles.isIn]: scrollDirection === "top",
          [styles.isOut]: scrollDirection === "bottom"
        })}
      >
        <BottomOperator />
        <BottomNavBar
          className={styles.bottom_nav_shadow}
          style={{ position: "relative" }}
        />
      </View>
    </View>
  );
};

export default Home;
