import { BottomNavBar } from "@src/components/business";
import { View } from "@tarojs/components";
import { usePageScroll } from "@tarojs/taro";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import styles from "./style.module.scss";

const Home = () => {
  const [navOut, setNavOut] = useState(false);
  const ref = useRef(0)
  usePageScroll(payload => {
    const top = ref.current
    const isOut = payload.scrollTop - top > 0;
    setNavOut(isOut);
    ref.current = payload.scrollTop
  });
  return (
    <View>
      <View style={{ height: "200vh", background: "green" }}></View>
      <BottomNavBar
        className={classNames(styles.bottom_nav, [
          navOut ? styles.isOut : styles.isIn
        ])}
      />
    </View>
  );
};

export default Home;
