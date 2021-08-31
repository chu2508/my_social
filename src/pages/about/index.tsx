import { Image, Text, View, CoverImage } from "@tarojs/components";
import faker, { fake } from "faker";
import { BiCheckShield, BiChevronRight } from "react-icons/bi";
import styles from "./style.module.scss";

const About = () => {
  const avatar = faker.image.avatar();
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
      <View>
        <View>
          <View>45</View>
          <View>My Liked</View>
        </View>
        <View>
          <View>
            <Image src={faker.image.image()} />
            <View>20</View>
          </View>
          <View>Liked Me</View>
        </View>
        <View>
          <View>45</View>
          <View>Recent Viewed</View>
        </View>
      </View>
    </View>
  );
};

export default About;
