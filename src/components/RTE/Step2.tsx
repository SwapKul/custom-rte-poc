import { useState } from "react";
import { IStacks } from "./interfaces";
import SelectOptions from "@elements/SelectOptions";

const Step2 = () => {
  const [stackInfo, setStackInfo] = useState({
    stack: "Not Selected",
  });
  const stacks: IStacks[] = [
    {
      name: "Frontend",
    },
    {
      name: "Backend",
    },
    {
      name: "Fullstack",
    },
    {
      name: "DevOps",
    },
    {
      name: "Android",
    },
  ];

  const handleStackSelect = (stack: string) => {
    console.log("=====> stackInfo", stack);
    setStackInfo({ stack });
  };
  return (
    <div className="shadow-lg p-4 mt-16">
      <p className="text-center w-full text-2xl">Select the Stack</p>
      <p className="text-center w-full text-sm text-secondary-blue">
        {stackInfo.stack}
      </p>
      <div className="flex flex-wrap w-full mt-10 justify-center gap-20">
        {stacks.map(({ name }) => (
          <SelectOptions name={name} key={name} action={handleStackSelect} />
        ))}
      </div>
    </div>
  );
};

export default Step2;
