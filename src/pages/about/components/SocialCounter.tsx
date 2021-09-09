import { Image, View } from "@tarojs/components";
import faker from "faker";
import styles from '../style.module.scss';

const SocialCounter = () => {
  return (
    <View className={styles.social_count}>
      <View className={styles.item}>
        <View className={styles.count}>45</View>
        <View className={styles.title}>我喜欢的</View>
      </View>
      <View  className={` ${styles.item}`}>
        <View className={`${styles.border} ${styles.count}`}>
          <Image className={styles.img} src={faker.image.avatar()} />
          <View className={styles.number}>20</View>
        </View>
        <View className={styles.title}>喜欢我的</View>
      </View>
      <View  className={styles.item}>
        <View className={styles.count}>45</View>
        <View className={styles.title}>最近来访</View>
      </View>
    </View>
  );
};

export default SocialCounter;
