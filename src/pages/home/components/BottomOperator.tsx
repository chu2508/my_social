import { View } from "@tarojs/components";
import { BiX } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import styles from "../style.module.scss";

const BottomOperator = () => {
  return (
    <View
      className={styles.operate}
    >
      <View
        className={styles.operate_btn}
        style={{ background: "#999", marginRight: "20px" }}
      >
        <BiX size={38} />
      </View>
      <View className={styles.operate_btn} style={{ background: "tomato" }}>
        <BsFillHeartFill size={24} style={{ top: 2, position: "relative" }} />
      </View>
    </View>
  );
};

export default BottomOperator;
