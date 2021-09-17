import { PersonalCard, BadgeOverlay } from "@src/components/business";
import ISimplePersonInfo from "@src/domain/types/ISimplePersonInfo";
import { View } from "@tarojs/components";
import { useState } from "react";

const LikesMe = () => {
  const [persons] = useState<ISimplePersonInfo[]>([]);
  const col1 = persons.filter((_, i) => i % 2 === 1);
  const col2 = persons.filter((_, i) => i % 2 === 0);
  const render = (item: ISimplePersonInfo) => (
    <PersonalCard
      key={item.id}
      person={item}
      overlay={() => <BadgeOverlay badges={[{ type: "liked" }]} />}
    />
  );
  return (
    <View>
      <View>{col1.map(render)}</View>
      <View>{col2.map(render)}</View>
    </View>
  );
};

export default LikesMe;
