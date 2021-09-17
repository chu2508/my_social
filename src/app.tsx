import useAuthenticationService, { AuthenticationService } from "@bis/Authentication/useAuthenticationService";
import { FC } from "@tarojs/taro";
import { Provider } from "react-redux";
import useHomeService, { HomeService } from "./pages/home/hooks/useHomeService";
import "./app.scss";
import configStore from "./store";

const store = configStore();
const App: FC = (props) => {
  return (
    <Provider store={store}>
      <AuthenticationService.Provider value={useAuthenticationService()}>
        <HomeService.Provider value={useHomeService()}>{props.children}</HomeService.Provider>
      </AuthenticationService.Provider>
    </Provider>
  );
}

export default App;
