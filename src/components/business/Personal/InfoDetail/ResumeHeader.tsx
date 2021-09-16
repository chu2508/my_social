import { View } from "@tarojs/components";
import classNames from "classnames";
import React from "react";
import { BiCheckShield } from "react-icons/bi";
import styles from "./style.module.scss";

const ResumeHeader = () => {
  return (
    <View className={classNames(styles.resume_header, "mb-10")}>
      <BiCheckShield color="tomato" size={18} />
      <View >武夷学院</View>
      <View />
      <View>本科</View>
      <View style={{ flex: "1 1", textAlign: "right" }}>全日制</View>
    </View>
  );
};

export default ResumeHeader;
