import RTEComp from "@components/RTE/RTEComp";
import RTEStepper from "@components/RTE/RTEStepper";
import Container from "@elements/Container";
import { useAppDispatch } from "@hooks/index";
import { setTitle } from "@store/layout/layoutSlice";
import { useEffect } from "react";

const RTEPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle("RTE"));
  }, []);
  // return (
  //   <Container>
  //     <RTEComp />
  //   </Container>
  // );
  return <RTEStepper />;
  // return <RTEComp />;
};

export default RTEPage;
