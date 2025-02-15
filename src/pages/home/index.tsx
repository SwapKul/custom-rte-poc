import SampleChildren from "@components/Sample/SampleChildren";
import { useAppDispatch } from "@hooks/index";
import { setTitle } from "@store/layout/layoutSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle("Home"));
  }, [window.location.pathname]);
  return <SampleChildren />;
};

export default Home;
