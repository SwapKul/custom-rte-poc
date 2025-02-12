import RTE from "@components/RTE";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RTE />
    </Provider>
  );
}

export default App;
