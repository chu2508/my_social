import { BadgeOverlay } from "@bis/Personal/Overlay";
import PersonalCard from "@bis/Personal/SimpleCard";
import ISimplePersonInfo from "@src/domain/types/ISimplePersonInfo";
import { View } from "@tarojs/components";
import faker from "faker";
import { useState } from "react";
import { BiChat } from "react-icons/bi";

const mockData = Array.from({ length: 5 }).map<ISimplePersonInfo>((_, i) => {
  return {
    id: i + 1 + "",
    avatar: faker.image.avatar(),
    isLiked: true,
    isBothLiked: Math.floor(Math.random() * 10) % 2 ? true : false,
    isCertified: true,
    name: "张三",
    age: 24,
    job: "Coder"
  };
});
const ILikes = () => {
  const [persons] = useState<ISimplePersonInfo[]>(mockData);
  const col1 = persons.filter((_, i) => i % 2 === 1);
  const col2 = persons.filter((_, i) => i % 2 === 0);
  const render = (person: ISimplePersonInfo) => (
    <View style={{ marginBottom: "15px" }} key={person.id}>
      <PersonalCard
        person={person}
        overlay={p => {
          const badges: any = [
            { type: "liked", flag: p.isLiked && !p.isBothLiked },
            { type: "both_liked", flag: p.isBothLiked }
          ].filter(item => item.flag);
          return <BadgeOverlay badges={badges} />;
        }}
        footer={() => {
          return (
            <View style={{ fontSize: "14px" }}>
              <View
                style={{
                  borderBottom: "1px solid #ccc",
                  fontSize: "14px",
                  padding: "0 10px"
                }}
              >
                {person.name}-{person.age}-{person.job}
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 10px"
                }}
              >
                <BiChat color="tomato" size="24" /> 聊天
              </View>
            </View>
          );
        }}
      />
    </View>
  );
  return (
    <View style={{ display: "flex", padding: "15px" }}>
      <View style={{ flex: "1 1", marginRight: "15px" }}>
        {col1.map(render)}
      </View>
      <View style={{ flex: "1 1" }}>{col2.map(render)}</View>
    </View>
  );
};

export default ILikes;
