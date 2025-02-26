import { useState } from "react";
import SelectOptions from "@elements/SelectOptions";
import { IStepCompProps } from "./interfaces";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import {
  selectRte,
  setNextStep,
  setPrevStep,
  setRteState,
} from "@store/rte/rteSlice";

const StepComp = ({ title, option, options }: IStepCompProps) => {
  const [selectedOption, setSelectedOption] = useState("Not Selected");
  const rteData = useAppSelector(selectRte);

  const dispatch = useAppDispatch();

  const handleLangSelect = (value: string) => {
    console.log(`=====> ${option}`, value);
    setSelectedOption(value);
    dispatch(setRteState({ [option]: value }));
  };
  return (
    <div className="shadow-[0px_0px_30px_5px_rgba(0,0,0,0.2)] p-4 mb-20 flex items-center">
      <button
        className="bg-primary-blue px-3 py-1 rounded-[5px] text-white"
        onClick={() => dispatch(setPrevStep())}
      >
        <i className="fa-solid fa-backward-step"></i>
      </button>
      <div className="w-full">
        <p className="text-center w-full text-2xl">Select the {title}</p>
        <p className="text-center w-full text-sm text-secondary-blue">
          {rteData[option]}
        </p>
        <div className="flex flex-wrap w-full mt-10 justify-center gap-14">
          {options.map((opt: any) => (
            <SelectOptions
              name={opt[option]}
              key={opt[option]}
              action={handleLangSelect}
            />
          ))}
        </div>
      </div>
      <button
        className="bg-primary-blue px-3 py-1 rounded-[5px] text-white"
        onClick={() => dispatch(setNextStep())}
      >
        <i className="fa-solid fa-forward-step"></i>
      </button>
    </div>
  );
};

export default StepComp;
