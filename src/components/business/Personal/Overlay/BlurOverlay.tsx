import { View } from "@tarojs/components";

const BlurOverlay = () => {
  return (
    <View style={{ background: "rgba(0,0,0,0.25)", filter: "blur(3px)" }} />
  );
};

export default BlurOverlay;
