import { ScrollView, View, Swiper, SwiperItem } from "@tarojs/components";
import styles from "./style.module.scss";
import Tips from "./Tips";
import useNextSeek from "./useNextSeek";

const NextSeek = () => {
  const { tipsList } = useNextSeek();
  return (
    <View className={styles.root}>
      <View className={styles.subtitle}>下一次推荐时间</View>
      <View className={styles.title}>明天中午12点</View>
      <View className={styles.desc}>NEXT</View>
      <Swiper>
        {tipsList.map((tips, key) => (
          <SwiperItem key={key}>
            <Tips text={tips} />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};

export default NextSeek;
