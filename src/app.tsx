import { FC } from "@tarojs/taro";
import { Provider } from "react-redux";
import "./app.scss";
import useHomeService, { HomeService } from "./pages/home/hooks/useHomeService";
import configStore from "./store";

const store = configStore();
const App: FC = (props) => {
  return (
    <Provider store={store}>
      <HomeService.Provider value={useHomeService()}>{props.children}</HomeService.Provider>
    </Provider>
  );
}

export default App;
