/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { contentTypes } from "../../constants/Options";
import IconButton from "../../elements/IconButton";
import ListGenerator from "./ListGenerator";

const ContentTypeSelector = ({
  type = "select",
  action,
  index,
  removeAction,
}: any) => {
  const [contentType, setContentType] = useState(type);

  const update = (event: any) => {
    const { value: type } = event.target;
    action(index, type);
    setContentType(type);
  };

  useEffect(() => {
    if (type !== contentType) {
      setContentType(type);
    }
  }, [type, contentType]);

  return (
    <div className=" flex flex-wrap w-full justify-between rounded-[5px] border border-black p-3">
      <div className="w-[95%] flex items-center">
        <label htmlFor="content_type">Please select the Content Type:</label>
        <select
          name="content_type"
          id="content_type"
          value={contentType}
          className="ml-auto border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
          onChange={update}
        >
          <option value="select" disabled>
            --SELECT--
          </option>
          {contentTypes.map(({ title, value }) => (
            <option key={title} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <IconButton
        content={"X"}
        action={() => removeAction(index)}
        size={1.5}
        font="md"
      />
      {contentType !== "select" && (
        <div className="w-[100%] mt-4">
          {contentType === "heading" ? (
            <input
              type="text"
              placeholder="Heading"
              className="w-full p-2 border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
            />
          ) : contentType === "para" ? (
            <textarea
              placeholder="Paragraph"
              className="w-full p-2 border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
            />
          ) : contentType === "list" ? (
            <ListGenerator />
          ) : contentType === "media" ? (
            <input
              type="file"
              className="w-full p-2 border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ContentTypeSelector;
