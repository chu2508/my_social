import ISimplePersonInfo from "@src/types/ISimplePersonInfo";
import { View, Image, Text } from "@tarojs/components";
import { ReactElement } from "react";

type RenderFunc = (person: ISimplePersonInfo) => ReactElement;

export interface PersonalCardProps {
  person: ISimplePersonInfo;
  footer?: RenderFunc;
  overlay?: RenderFunc;
}
const PersonalCard = (props: PersonalCardProps) => {
  const { person, footer, overlay } = props;
  return (
    <View>
      <View>
        {overlay?.(person)}
        <Image src={person.avatar} />
      </View>
      {footer && <View>{footer(person)}</View>}
    </View>
  );
};

export default PersonalCard;
