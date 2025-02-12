import RTE from "@components/RTE";
import { Provider } from "react-redux";
import { persistor, store } from "@store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RTE />
      </PersistGate>
    </Provider>
  );
}

export default App;
