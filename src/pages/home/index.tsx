import { BottomNavBar } from "@src/components/business";
import { View } from "@tarojs/components";
import { usePageScroll } from "@tarojs/taro";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { BsFillHeartFill } from "react-icons/bs";
import { BiX } from "react-icons/bi";

const Home = () => {
  const [navOut, setNavOut] = useState(false);
  const ref = useRef(0);
  usePageScroll(payload => {
    const top = ref.current;
    const isOut = payload.scrollTop - top > 0;
    setNavOut(isOut);
    ref.current = payload.scrollTop;
  });
  return (
    <View>
      <View style={{ height: "200vh", background: "green" }}></View>
      <View
        className={classNames(styles.bottom_nav, [
          navOut ? styles.isOut : styles.isIn
        ])}
      >
        <View
          style={{ display: "flex", justifyContent: "center", color: "#fff", position: 'absolute', top: '-100%', left: 0, right: 0, zIndex: 199 }}
        >
          <View className={styles.operate_btn} style={{ background: "#999", marginRight: '20px' }}>
            <BiX size={38} />
          </View>
          <View className={styles.operate_btn} style={{ background: "tomato" }}>
            <BsFillHeartFill
              size={24}
              style={{ top: 2, position: "relative" }}
            />
          </View>
        </View>
        <BottomNavBar
          className={styles.bottom_nav_shadow}
          style={{ position: "relative" }}
        />
      </View>
    </View>
  );
};

export default Home;
