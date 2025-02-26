import ProgressBar from "@elements/ProgressBar";
import Home from "@pages/home";
import RTEPage from "@pages/rte";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="rte" element={<RTEPage />} />
      <Route path="progress" element={<ProgressBar />} />
    </Routes>
  );
};

export default Router;
