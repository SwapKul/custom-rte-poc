import RTE from "@components/RTE";
import { useAppDispatch } from "@hooks/index";
import { setTitle } from "@store/layout/layoutSlice";
import { useEffect } from "react";

const RTEPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle("RTE"));
  }, []);
  return <RTE />;
};

export default RTEPage;
