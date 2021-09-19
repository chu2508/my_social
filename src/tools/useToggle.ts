import { useState } from "react";

export default function useToggle(initValue: boolean = false) {
  const [flag, setFlag] = useState(initValue);
  const toggle = () => setFlag(s => !s);
  const left = () => setFlag(false);
  const right = () => setFlag(true);

  return { flag, toggle, left, right };
}
