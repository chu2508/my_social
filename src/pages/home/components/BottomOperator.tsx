import { View } from "@tarojs/components";
import { useContext } from "react";
import { BiX } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { StrangeRecommendationService } from "../../../components/business/StrangeRecommendation/useStrangeRecommendationService";
import styles from "../style.module.scss";

const BottomOperator = () => {
  const { person, like, notLike } = useContext(StrangeRecommendationService);
  return (
    <View className={styles.operate}>
      <View
        className={styles.operate_btn}
        style={{ background: "#999", marginRight: "20px" }}
        onClick={person ? () => notLike(person.id) : undefined}
      >
        <BiX size={38} />
      </View>
      <View
        className={styles.operate_btn}
        style={{ background: "tomato" }}
        onClick={person ? () => like(person.id) : undefined}
      >
        <BsFillHeartFill size={24} style={{ top: 2, position: "relative" }} />
      </View>
    </View>
  );
};

export default BottomOperator;
