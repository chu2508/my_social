import ISimplePersonInfo from "@src/types/ISimplePersonInfo";
import { Image, View } from "@tarojs/components";
import { ReactElement } from "react";
import styles from './style.module.scss';

type RenderFunc = (person: ISimplePersonInfo) => ReactElement;

export interface PersonalCardProps {
  person: ISimplePersonInfo;
  footer?: RenderFunc;
  overlay?: RenderFunc;
}
const PersonalCard = (props: PersonalCardProps) => {
  const { person, footer, overlay } = props;
  return (
    <View className={styles.card}>
      <View className={styles.cover_wrap}>
        <View className={styles.placeholder} />
        <View className={styles.cover}>
          {overlay?.(person)}
          <Image className={styles.avatar} src={person.avatar} />
        </View>
      </View>
      {footer && <View className={styles.footer_wrap}>{footer(person)}</View>}
    </View>
  );
};

export default PersonalCard;
