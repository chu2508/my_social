import useAuthenticationService, {
  AuthenticationService
} from "@bis/Authentication/useAuthenticationService";
import useStrangeRecommendationService, {
  StrangeRecommendationService
} from "@bis/StrangeRecommendation/useStrangeRecommendationService";
import { FC } from "react";
import { Provider } from "react-redux";
import "./app.scss";
import configStore from "./store";

const store = configStore();
const App: FC = props => {
  console.log("props.children", props.children);
  const authenticationState = useAuthenticationService();
  const strangeRecommendState = useStrangeRecommendationService();
  return (
    <Provider store={store}>
      <AuthenticationService.Provider value={authenticationState}>
        <StrangeRecommendationService.Provider value={strangeRecommendState}>
          {props.children}
        </StrangeRecommendationService.Provider>
      </AuthenticationService.Provider>
    </Provider>
  );
};

export default App;
