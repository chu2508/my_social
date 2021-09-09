import Panel from "@src/components/ui/Panel";
import { Image, Swiper, SwiperItem, View } from "@tarojs/components";
import classNames from "classnames";
import ResumeHeader from "./ResumeHeader";
import styles from "./style.module.scss";

const PersonalInfo = () => {
  const urlList = [
    "https://bbswater-fd.zol-img.com.cn/t_s1200x5000/g5/M00/06/0C/ChMkJlcZxHCIPOeAAAsFPHIxg_gAAQZmADxJasACwVU507.jpg",
    "https://bbswater-fd.zol-img.com.cn/t_s1200x5000/g5/M00/06/0C/ChMkJ1cZxHGIfYlNAAruHPgJDd8AAQZmAEB6-wACu40115.jpg",
    "https://bbswater-fd.zol-img.com.cn/t_s1200x5000/g5/M00/06/0C/ChMkJlcZxHOICoDVAAqxGszFwe4AAQZmAEYBhgACrEy723.jpg"
  ];
  return (
    <View>
      <Swiper
        indicatorDots
        indicatorActiveColor="#fff"
        className={classNames(styles.swiper, "mb-20")}
        autoplay
      >
        {urlList.map((url, i) => {
          return (
            <SwiperItem key={i}>
              <Image src={url} className={styles.swiper_img} mode="widthFix" />;
            </SwiperItem>
          );
        })}
      </Swiper>
      <Panel
        className="mb-20"
        renderHeader={() => {
          return <ResumeHeader />;
        }}
      >
        <View>
          福州本地女生，喜欢旅游户外，美食探店，热爱生活，喜欢音乐，喜欢小动物，性格活泼开朗可爱有时候古灵精怪放飞自我的一枚好奇少女。
        </View>
      </Panel>
      <Panel className="mb-20" title="关于我">
        <View>
          福州本地女生，喜欢旅游户外，美食探店，热爱生活，喜欢音乐，喜欢小动物，性格活泼开朗可爱有时候古灵精怪放飞自我的一枚好奇少女。
        </View>
      </Panel>
      <Panel className="mb-20" title="兴趣爱好">
        <View>
          旅行
          用相机记录一切美好事物，喜欢音乐带来一个人的安静，喜欢去木工手作享受独立成品带来的成就感和快乐。
        </View>
      </Panel>
      <Panel className="mb-20" title="感情观">
        <View>爱是相互吸引</View>
      </Panel>
      <Panel className="mb-20" title="心仪的TA">
        <View>喜欢没有标准</View>
      </Panel>
    </View>
  );
};

export default PersonalInfo;
