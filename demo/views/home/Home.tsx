import { useService } from "demo/domain/core/inject";
import { CallCountServiceToken } from "demo/main/factories/services";
import CallCountDisplay from "./components/CallCountDisplay";

const Home = () => {
  const service = useService(CallCountServiceToken);
  return (
    <div>
      <CallCountDisplay service={service} />
    </div>
  );
};

export default Home;
