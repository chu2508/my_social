import { View } from "@tarojs/components";
import React from "react";
import styles from "./style.module.scss";

const Tips = (props: { text: string }) => {
  return <View className={styles.tips}>{props.text}</View>;
};

export default Tips;
