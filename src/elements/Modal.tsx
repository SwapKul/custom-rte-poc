import { useEffect, useRef } from "react";
import ActionButton from "./ActionButton";
import { IModalProps } from "./Modal.inf";

const Modal = ({ title, content, open, handleClose }: IModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClose]);
  const yesClick = () => {
    console.log("Yes Clicked");
  };

  const noClick = () => {
    console.log("No Clicked");
    handleClose();
  };
  return (
    <dialog
      ref={dialogRef}
      open={open}
      className={`${
        open &&
        "w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex justify-center items-center"
      }`}
    >
      <div
        ref={contentRef}
        id="model-content"
        className="bg-white w-[50%] m-auto p-4 rounded-[5px] flex flex-col gap-8 text-center"
      >
        <p className="text-2xl">{title}</p>
        <p className="">{content}</p>
        <div className="w-[80%] m-auto flex justify-between">
          <ActionButton label="No" w="40%" action={noClick} bg="#f07674" />
          <ActionButton label="Yes" w="40%" action={yesClick} bg="#5fdd82" />
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
