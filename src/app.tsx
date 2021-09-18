import useAuthenticationService, {
  AuthenticationService
} from "@bis/Authentication/useAuthenticationService";
import useStrangeRecommendationService, {
  StrangeRecommendationService
} from "@bis/StrangeRecommendation/useStrangeRecommendationService";
import { FC } from "react";
import "./app.scss";

const App: FC = props => {
  const authenticationState = useAuthenticationService();
  const strangeRecommendState = useStrangeRecommendationService();
  return (
    <AuthenticationService.Provider value={authenticationState}>
      <StrangeRecommendationService.Provider value={strangeRecommendState}>
        {props.children}
      </StrangeRecommendationService.Provider>
    </AuthenticationService.Provider>
  );
};

export default App;
