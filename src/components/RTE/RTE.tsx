/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import ContentTypeSelector from "./ContentTypeSelector";
import IconButton from "../../elements/IconButton";
import { Content } from "./interfaces";
import ActionButton from "../../elements/ActionButton";
import Modal from "../../elements/Modal";
const RTE = () => {
  const [content, setContent] = useState([
    {
      type: "select",
      value: null,
    },
  ] as Content[]);

  const [modalOpen, setModalOpen] = useState(true);

  const resetDisabled = content.length === 1 && content[0].type === "select";

  const submitDisabled = content.some((cnt) => cnt.type === "select");

  const addContent = () => {
    console.log("addContent");
    setContent((prev: any) => [
      ...prev,
      {
        type: "select",
        content: null,
      },
    ]);
  };

  const updateContent = (index: number, value: string | unknown) => {
    console.log("===> updateContent", index, value);
    setContent((prev: Content[]) =>
      prev.map((content: Content, ind: number) =>
        ind === index ? { ...content, value } : content
      )
    );
  };

  const resetContent = () => {
    setContent([
      {
        type: "select",
        value: null,
      },
    ]);
  };

  const submitContent = () => {
    console.log("===> submitContent", content);
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

  const handleClose = (state: boolean = false) => {
    if (state) {
      console.log("State is positive");
    } else {
      console.log("State is negative");
    }
    setModalOpen(false);
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
                updateAction={updateContent}
                removeAction={removeContent}
                index={index}
              />
            </div>
          ))}
          <div className="w-[50%] m-auto flex items-center justify-between mt-4">
            <ActionButton
              label="Reset"
              w="40%"
              action={resetContent}
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
      <Modal
        title={"Are you sure?"}
        content={
          "If you change the type, the content of the selected tab will be reset!"
        }
        open={modalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default RTE;
