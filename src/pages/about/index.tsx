import { BottomNavBar } from "@src/components/business";
import { Image, Text, View } from "@tarojs/components";
import { useDidShow } from "@tarojs/taro";
import faker from "faker";
import { BiCheckShield, BiChevronRight } from "react-icons/bi";
import OptionList from "./components/OptionList";
import SocialCounter from "./components/SocialCounter";
import styles from "./style.module.scss";

const About = () => {
  const avatar = faker.image.avatar();
  useDidShow(() => {
    console.log('about');
  })
  return (
    <View>
      <View className={styles.header}>
        <Image className={styles.avatar} src={avatar} />
        <View className={styles.right}>
          <View className={styles.title}>
            <View className={styles.name}>UserName</View>
            <View className={styles.ident}>
              <BiCheckShield color="orange" size={16} />
              <Text className={styles.text}>未认证用户</Text>
            </View>
          </View>
          <View className={styles.view_more}>
            <Text>查看/编辑资料</Text>
            <BiChevronRight size={20} />
          </View>
        </View>
      </View>
      <SocialCounter />
      <OptionList />
      <View style={{ textAlign: "center", fontSize: "12px" }}>
        青藤号:123456789
      </View>
      <BottomNavBar activeIndex={2} />
    </View>
  );
};

export default About;
