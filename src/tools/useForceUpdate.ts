import { useState } from "react";

export default function useForceUpdate() {
  const [_, setFlag] = useState({});

  return () => setFlag({})
}
