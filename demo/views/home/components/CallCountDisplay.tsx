import { ICallCount } from "demo/domain/types/counter/ICallCount";
import { ICallCounterService } from "demo/domain/types/counter/ICallCountService";
import React, { useEffect, useState } from "react";

interface CallCounterProps {
  service: ICallCounterService;
}
const CallCountDisplay = (props: CallCounterProps) => {
  const { service } = props;
  const [counts, setCounts] = useState<ICallCount | null>(null);
  useEffect(() => {
    service.getCount().then(res => {
      setCounts(res);
    });
  }, []);
  return <div></div>;
};

export default CallCountDisplay;
