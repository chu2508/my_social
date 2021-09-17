import BottomBar from "@bis/Navigation/BottomBar/BottomBar";
import InfoDetail from "@bis/Personal/InfoDetail/InfoDetail";
import { View } from "@tarojs/components";
import classNames from "classnames";
import BottomOperator from "./components/BottomOperator";
import useScrollDirection from "./hooks/useScrollDirection";
import styles from "./style.module.scss";

const Home = () => {
  const scrollDirection = useScrollDirection();
  return (
    <View className={styles.page}>
      <InfoDetail />
      <View
        className={classNames(styles.bottom_nav, {
          [styles.isIn]: scrollDirection === "top",
          [styles.isOut]: scrollDirection === "bottom"
        })}
      >
        <BottomOperator />
        <BottomBar
          className={styles.bottom_nav_shadow}
          style={{ position: "relative" }}
        />
      </View>
    </View>
  );
};

export default Home;
