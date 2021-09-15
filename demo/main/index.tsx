import { Provider } from "demo/domain/core/inject";
import { createHomePage } from "./factories/views";

const App = () => {
  return (
    <Provider>
      <div>{createHomePage()}</div>
    </Provider>
  );
};

export default App;
