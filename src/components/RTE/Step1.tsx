import { useState } from "react";
import { IProgLang } from "./interfaces";
import SelectOptions from "@elements/SelectOptions";

const Step1 = () => {
  const [progLang, setProgLang] = useState({
    language: "Not Selected",
  });
  const languages: IProgLang[] = [
    {
      language: "Javascript",
    },
    {
      language: "Python",
    },
  ];

  const handleLangSelect = (language: string) => {
    console.log("=====> progLang", language);
    setProgLang({ language });
  };
  return (
    <div className="shadow-lg p-4">
      <p className="text-center w-full text-2xl">Select the Language</p>
      <p className="text-center w-full text-sm text-secondary-blue">
        {progLang.language}
      </p>
      <div className="flex flex-wrap w-full mt-10 justify-center gap-14">
        {languages.map(({ language }) => (
          <SelectOptions
            name={language}
            key={language}
            action={handleLangSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Step1;
