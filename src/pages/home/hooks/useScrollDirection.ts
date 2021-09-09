import { usePageScroll } from "@tarojs/taro";
import { useRef, useState } from "react";

const useScrollDirection = () => {
  const ref = useRef(0);
  const [direction, setDirection] = useState<"top" | "bottom">("top");
  usePageScroll(payload => {
    const top = ref.current;
    const currentDirection = payload.scrollTop - top > 0 ? "bottom" : "top";
    ref.current = payload.scrollTop;
    setDirection(currentDirection);
  });
  console.log(direction)
  return direction;
};

export default useScrollDirection