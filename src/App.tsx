/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import ContentTypeSelector from "./components/RTE/ContentTypeSelector";
import IconButton from "./elements/IconButton";

function App() {
  const [content, setContent] = useState([
    {
      type: "select",
    },
  ] as any);

  const resetDisabled = content.length === 1 && content[0].type === "select";

  const addContent = () => {
    console.log("addContent");
    setContent((prev: any) => [
      ...prev,
      {
        type: "select",
      },
    ]);
  };

  const resetContent = () => {
    setContent([
      {
        type: "select",
      },
    ]);
  };

  const removeContent = (index: number) => {
    setContent((prev: any) =>
      prev.filter((_: any, ind: number) => ind !== index)
    );
  };

  const updateContentType = (index: number, type: string) => {
    setContent((prev: any) =>
      prev.map((content: any, ind: number) =>
        ind === index ? { ...content, type } : content
      )
    );
  };

  return (
    <>
      <div className="flex flex-wrap w-[90%] m-auto mt-[20vh] border border-black p-4 rounded-[5px]">
        <IconButton content={"+"} action={addContent} size={2} font={"2xl"} />
        <div className="w-full flex flex-wrap items-center">
          {content?.map(({ type }: any, index: number) => (
            <div
              className="w-full flex items-center justify-between mt-4"
              key={index}
            >
              <ContentTypeSelector
                type={type}
                action={updateContentType}
                removeAction={removeContent}
                index={index}
              />
            </div>
          ))}
          <div className="w-[50%] m-auto flex items-center justify-between mt-4">
            <button
              className={`w-[40%] bg-red-400 rounded-[5px] text-white ${
                !resetDisabled ? "hover:bg-red-500" : ""
              } duration-150 p-2`}
              onClick={resetContent}
              disabled={resetDisabled}
            >
              Reset
            </button>
            <button
              className={`w-[40%] bg-green-400 rounded-[5px] text-white hover:bg-green-500 duration-150 p-2`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
