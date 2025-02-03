/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import IconButton from "../../elements/IconButton";
import { IconButtonOption } from "../../elements/interfaces/IconButton.inf";

const ListGenerator = () => {
  const [listContents, setListContents] = useState([
    {
      content: "",
      placeholder: "Enter data...",
      level: 0,
    },
  ] as any);

  const updateContent = (index: number, content: string) => {
    setListContents((prev: any) =>
      prev.map((item: any, ind: number) =>
        ind === index ? { ...item, content } : item
      )
    );
  };

  const removeContent = (index: number) => {
    setListContents((prev: any) =>
      prev.filter((_: any, ind: number) => ind !== index)
    );
  };

  const newEntryAdd = (e?: number) => {
    if (e) {
      if (e === listContents.length - 1) {
        setListContents((prev: any) => [
          ...prev,
          {
            content: "",
            placeholder: "Enter data...",
            level: 0,
          },
        ]);
      } else {
        setListContents((prev: any) => [
          ...prev.slice(0, e + 1),
          {
            content: "",
            placeholder: "Enter data...",
            level: 0,
          },
          ...prev.slice(e + 1),
        ]);
      }
    }
  };

  const nestedEntryAdd = (e?: number) => {
    if (e) {
      if (e === listContents.length - 1) {
        setListContents((prev: any) => [
          ...prev,
          {
            content: "",
            placeholder: "Enter data...",
            level: 1,
          },
        ]);
      } else {
        setListContents((prev: any) => [
          ...prev.slice(0, e + 1),
          {
            content: "",
            placeholder: "Enter data...",
            level: 1,
          },
          ...prev.slice(e + 1),
        ]);
      }
    }
  };

  const ListEntryOption: IconButtonOption[] = [
    {
      label: "Add a new Entry",
      action: newEntryAdd,
    },
    {
      label: "Add a Nested Entry",
      action: nestedEntryAdd,
    },
  ];

  return (
    <div className="w-full flex flex-wrap items-center gap-5">
      {listContents.map((item: any, index: any) => (
        <div
          className="w-full flex items-center justify-between mb-2 gap-2"
          draggable
          style={{
            marginLeft: `${item.level * 20}px`,
          }}
          key={index}
          onDragCapture={(e) => console.log(e)}
        >
          <IconButton
            content={"+"}
            // action={newEntryAdd}
            size={1.5}
            font="md"
            index={index}
            options={ListEntryOption}
          />
          <input
            className="w-full p-2 border-2 rounded-[5px] outline-[grey] outline-1 text-sm"
            key={index}
            value={item.content}
            placeholder={item.placeholder}
            onChange={(e: any) => updateContent(index, e.target.value)}
          />
          <IconButton
            content={"X"}
            action={() => removeContent(index)}
            size={1.5}
            font="md"
          />
        </div>
      ))}
    </div>
  );
};

export default ListGenerator;
