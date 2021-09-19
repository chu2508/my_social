import { TabBar } from "@bis/index";
import { StrangeRecommendationService } from "@bis/StrangeRecommendation/useStrangeRecommendationService";
import PersonalInfo from "@src/components/business/PersonalInfo";
import IPersonalInfo from "@src/types/IPersonalInfo";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { useContext } from "react";
import BottomOperator from "./components/BottomOperator";
import NextSeek from "./components/NextSeek/NextSeek";
import useScrollDirection from "./hooks/useScrollDirection";
import styles from "./style.module.scss";

const CurrentSeek = () => {
  const { person } = useContext(StrangeRecommendationService);
  return (
    <>
      <PersonalInfo resource={person as IPersonalInfo} />
    </>
  );
};

const Home = () => {
  const state = useContext(StrangeRecommendationService);
  const scrollDirection = useScrollDirection();

  return (
    <View className={styles.page}>
      {state.person !== null && <CurrentSeek />}
      {state.person === null && <NextSeek />}
      {state.person !== null && (
        <View
          className={classNames(styles.bottom_nav, {
            [styles.isIn]: scrollDirection === "top",
            [styles.isOut]: scrollDirection === "bottom"
          })}
        >
          <BottomOperator />
          <TabBar
            className={styles.bottom_nav_shadow}
            style={{ position: "relative" }}
          />
        </View>
      )}
      {state.person === null && <TabBar />}
    </View>
  );
};

export default Home;
