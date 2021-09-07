import PersonalBadgeType from "@src/types/PersonalBadgeType";
import { View } from "@tarojs/components";

type Position = "left-top" | "right-top" | "left-bottom" | "right-bottom";
interface BadgeProps {
  type: PersonalBadgeType; // 徽标的类型
  position?: Position; // 徽标放置的位置，多个相同位置的徽标会流式排布依次渲染， 默认位置为 left-top
}

const POSITIONS: [Position, Position, Position, Position] = [
  "left-top",
  "right-top",
  "left-bottom",
  "right-bottom"
];

const matchBadgeComponent = (type: PersonalBadgeType) => {
  switch (type) {
    case "liked":
      return LikedBadge;
    case "both_liked":
      return BothLikedBadge;
    case "super_liked":
      return SupperLikedBadge;
    case "not_liked":
      return NotLikedBadge;
    case "certified":
      return CertifiedBadge;
  }
};

const LikedBadge = () => {
  return <View>Liked</View>;
};
const BothLikedBadge = () => {
  return <View>BothLiked</View>;
};
const SupperLikedBadge = () => {
  return <View>SupperLiked</View>;
};
const NotLikedBadge = () => {
  return <View>NotLiked</View>;
};
const CertifiedBadge = () => {
  return <View>Certified</View>;
};

interface BadgeOverlayProps {
  badges: BadgeProps[]; // 徽标配置
}
/**
 * 在 personal card图片上的徽标覆盖层，可以配置显示不同的徽标，以及他们的位置
 * @param props
 * @returns
 */
const BadgeOverlay = (props: BadgeOverlayProps) => {
  const list = props.badges.reduce(
    (container, current) => {
      if (current.position === "left-top" || current.position === undefined) {
        container[0].push(current);
      }
      if (current.position === "right-top") {
        container[1].push(current);
      }
      if (current.position === "left-bottom") {
        container[2].push(current);
      }
      if (current.position === "right-bottom") {
        container[3].push(current);
      }
      return container;
    },
    [[], [], [], []] as [BadgeProps[], BadgeProps[], BadgeProps[], BadgeProps[]]
  );
  return (
    <View>
      {list.map((badges, index) => {
        const positionClassName = POSITIONS[index];
        return (
          <View className={`${positionClassName}`} key={index}>
            {badges.map((badge, idx) => {
              const { type } = badge;
              const Badge = matchBadgeComponent(type);
              return <Badge key={idx} />;
            })}
          </View>
        );
      })}
    </View>
  );
};
export default BadgeOverlay;
