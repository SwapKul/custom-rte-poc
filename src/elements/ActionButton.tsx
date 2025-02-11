import { ActionButtonProps } from "./interfaces/Button.inf";

const ActionButton = ({
  label,
  bg,
  w,
  action,
  disabled,
}: ActionButtonProps) => {
  return (
    <button
      style={{
        background: bg,
        width: w,
      }}
      onClick={action}
      className={`rounded-[5px] text-white ${
        !disabled ? "hover:bg-green-500" : ""
      } duration-150 p-2`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ActionButton;
