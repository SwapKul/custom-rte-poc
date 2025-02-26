import Container from "@elements/Container";
import StepComp from "./StepComp";
import { frameworks, languages, stacks } from "@constants/Options";
import { IStep } from "./interfaces";
import { useAppSelector } from "@hooks/index";
import { selectRte } from "@store/rte/rteSlice";
import ProgressBar from "@elements/ProgressBar";

const RTEStepper = () => {
  const { step, totalSteps } = useAppSelector(selectRte);
  const steps: IStep[] = [
    {
      title: "Language",
      options: languages,
      option: "language",
    },
    {
      title: "Stack",
      options: stacks,
      option: "stack",
    },
    {
      title: "Framework",
      options: frameworks,
      option: "framework",
    },
  ];

  const currentStep = steps[step - 1];
  return (
    <Container style={{ justifyContent: "center" }}>
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      {currentStep && (
        <StepComp
          title={currentStep.title}
          key={currentStep.title}
          options={currentStep.options}
          option={currentStep.option}
        />
      )}
    </Container>
  );
};

export default RTEStepper;
