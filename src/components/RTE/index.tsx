import ContentTypeSelector from "./ContentTypeSelector";
import { IContent } from "./interfaces";
import IconButton from "@elements/IconButton";
import ActionButton from "@elements/ActionButton";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import {
  addContent,
  allContent,
  removeSelectedContent,
  resetContent,
  updateContent,
  updateContentType,
} from "@store/content/contentSlice";

import "@styles/rte.css";

const RTE = () => {
  const content = useAppSelector(allContent);

  const dispatch = useAppDispatch();

  const resetDisabled = content.length === 1 && content[0].type === "select";

  const submitDisabled = content.some((cnt: IContent) => cnt.type === "select");

  const submitContent = () => {
    console.log("===> submitContent", content);
  };

  return (
    <div className="flex flex-col w-full m-auto h-full p-4 pb-0 rounded-[5px] bg-white">
      <IconButton
        content={"fa-solid fa-plus fa-beat"}
        action={() => dispatch(addContent())}
        size={2}
        font={"1.25rem"}
      />
      <div className="w-full items-center overflow-y-auto h-[calc(100%-4rem)] mt-2 custom-scroll shadow-lg pr-2 pb-2">
        {content?.map(({ type, value }: IContent, index: number) => (
          <div
            className="w-full flex items-center justify-between mt-4"
            key={index}
          >
            <ContentTypeSelector
              type={type}
              action={updateContentType}
              updateAction={updateContent}
              removeAction={removeSelectedContent}
              index={index}
              value={value}
            />
          </div>
        ))}
      </div>
      <div className="w-[50%] h-[4rem] mx-auto flex items-center justify-between mt-auto">
        <ActionButton
          label="Reset"
          w="40%"
          action={() => dispatch(resetContent())}
          bg="#f07674"
          disabled={resetDisabled}
        />
        <ActionButton
          label="Submit"
          w="40%"
          action={submitContent}
          bg="#5fdd82"
          disabled={submitDisabled}
        />
      </div>
    </div>
  );
};

export default RTE;
