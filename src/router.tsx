import Home from "@pages/home";
import RTEPage from "@pages/rte";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="rte" element={<RTEPage />} />
    </Routes>
  );
};

export default Router;
