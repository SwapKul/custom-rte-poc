/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { contentTypes } from "../../constants/Options";
import IconButton from "../../elements/IconButton";
import ListGenerator from "./ListGenerator";
import Modal from "../../elements/Modal";
import { IContentTypeSelectorProps } from "./interfaces";
import { useAppDispatch } from "@hooks/index";

const ContentTypeSelector = ({
  type = "select",
  action,
  index,
  removeAction,
  updateAction,
  value,
}: IContentTypeSelectorProps) => {
  const [contentType, setContentType] = useState(type);

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const update = (event: any, isExplicit: boolean = false) => {
    const { value } = event.target;
    if (type === "select" || isExplicit) {
      dispatch(action({ index, type: value }));
    } else {
      setModalOpen(true);
    }
    setContentType(value);
  };

  useEffect(() => {
    if (type !== contentType && !modalOpen) {
      setContentType(type);
    }
  }, [type, contentType, modalOpen]);

  const handleClose = (state: boolean = false) => {
    if (state) {
      update({ target: { value: contentType } }, true);
    }
    setModalOpen(false);
  };

  return (
    <div className=" flex flex-wrap w-full justify-between rounded-[5px] border border-black p-3">
      <div className="w-[95%] flex items-center">
        <label htmlFor="content_type">Please select the Content Type:</label>
        <select
          name="content_type"
          id="content_type"
          value={type}
          className="cursor-pointer ml-auto border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
          onChange={update}
        >
          <option value="select" disabled>
            --SELECT--
          </option>
          {contentTypes.map(({ title, value }) => (
            <option key={title} value={value} className="cursor-pointer">
              {title}
            </option>
          ))}
        </select>
      </div>
      <IconButton
        content={"fa-solid fa-trash"}
        action={() => dispatch(removeAction({ index }))}
        size={1.5}
        font="0.75rem"
      />
      {type !== "select" && (
        <div className="w-[100%] mt-4">
          {type === "heading" ? (
            <input
              type="text"
              placeholder="Heading"
              className="w-full p-2 border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
              value={value as string}
              onChange={(e) =>
                dispatch(updateAction({ index, value: e.target.value }))
              }
            />
          ) : type === "para" ? (
            <textarea
              placeholder="Paragraph"
              className="w-full p-2 border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
              value={value as string}
              onChange={(e) =>
                dispatch(updateAction({ index, value: e.target.value }))
              }
            />
          ) : type === "list" ? (
            <ListGenerator />
          ) : type === "media" ? (
            <input
              type="file"
              className="w-full p-2 border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
              onChange={(e) =>
                dispatch(
                  updateAction({
                    index,
                    value: e.target.files && e.target.files[0],
                  })
                )
              }
            />
          ) : null}
        </div>
      )}
      <Modal
        title={"Are you sure?"}
        content={
          "If you change the type, the content of the selected tab will be reset!"
        }
        open={modalOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ContentTypeSelector;
