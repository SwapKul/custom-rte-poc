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

const RTE = () => {
  const content = useAppSelector(allContent);

  const dispatch = useAppDispatch();

  const resetDisabled = content.length === 1 && content[0].type === "select";

  const submitDisabled = content.some((cnt: IContent) => cnt.type === "select");

  // const addContent = () => {
  //   setContent((prev: any) => [
  //     ...prev,
  //     {
  //       type: "select",
  //       content: null,
  //     },
  //   ]);
  // };

  // const updateContent = (index: number, value: string | unknown) => {
  //   setContent((prev: IContent[]) =>
  //     prev.map((content: IContent, ind: number) =>
  //       ind === index ? { ...content, value } : content
  //     )
  //   );
  // };

  // const resetContent = () => {
  //   setContent([
  //     {
  //       type: "select",
  //       value: "",
  //     },
  //   ]);
  // };

  const submitContent = () => {
    console.log("===> submitContent", content);
  };

  // const removeContent = (index: number) => {
  //   setContent((prev: any) =>
  //     prev.filter((_: any, ind: number) => ind !== index)
  //   );
  // };

  // const updateContentType = (index: number, type: string) => {
  //   setContent((prev: any) =>
  //     prev.map((content: any, ind: number) =>
  //       ind === index ? { ...content, type } : content
  //     )
  //   );
  // };

  return (
    <div className="flex flex-wrap w-[90%] m-auto mt-[20vh] border border-black p-4 rounded-[5px]">
      <IconButton
        content={"fa-solid fa-plus fa-beat"}
        action={() => dispatch(addContent())}
        size={2}
        font={"1.25rem"}
      />
      <div className="w-full flex flex-wrap items-center">
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
        <div className="w-[50%] m-auto flex items-center justify-between mt-4">
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
    </div>
  );
};

export default RTE;
