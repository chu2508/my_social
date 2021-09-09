import { View } from "@tarojs/components";
import { FC } from "@tarojs/taro";
import { ReactNode } from "react";
import styles from "../style.module.scss";

interface CellProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
}
const Cell: FC<CellProps> = props => {
  return (
    <View className={styles.cell}>
      {props.prefix && <View>{props.prefix}</View>}
      <View>{props.children}</View>
      {props.suffix && <View>{props.suffix}</View>}
    </View>
  );
};

const OptionList = () => {
  return (
    <View className={styles.option_list}>
      <Cell suffix="免费获得青藤币">推荐给好友</Cell>
      <Cell >帮助与客服</Cell>
    </View>
  );
};

export default OptionList;
