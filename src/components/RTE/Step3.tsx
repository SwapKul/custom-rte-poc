import { useState } from "react";
import { IFramework } from "./interfaces";
import SelectOptions from "@elements/SelectOptions";

const Step3 = () => {
  const [framework, setFramework] = useState({
    technology: "Not Selected",
  });
  const stacks: IFramework[] = [
    {
      technology: "React Js",
    },
    {
      technology: "Next.Js",
    },
    {
      technology: "Fullstack",
    },
    {
      technology: "DevOps",
    },
    {
      technology: "Mobile",
    },
  ];

  const handleStackSelect = (technology: string) => {
    console.log("=====> framework", technology);
    setFramework({ technology });
  };
  return (
    <div className="shadow-lg p-4 mt-16">
      <p className="text-center w-full text-2xl">
        Select the Framework/Library
      </p>
      <p className="text-center w-full text-sm text-secondary-blue">
        {framework.technology}
      </p>
      <div className="flex flex-wrap w-full mt-10 justify-center gap-20">
        {stacks.map(({ technology }) => (
          <SelectOptions
            name={technology}
            key={technology}
            action={handleStackSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Step3;
