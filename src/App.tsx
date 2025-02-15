import { Provider } from "react-redux";
import { persistor, store } from "@store/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "@layout/Layout";
// import SampleChildren from "@components/Sample/SampleChildren";
import Router from "./router";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Router />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
