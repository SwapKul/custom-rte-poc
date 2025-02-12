import { IconButtonProps } from "./interfaces/Button.inf";

const IconButton = ({
  content,
  action,
  size,
  font,
  options,
  index,
  level,
}: IconButtonProps) => {
  return (
    <div className="dropdown">
      <button
        style={{
          height: `${size}rem`,
          width: `${size}rem`,
          fontSize: font,
        }}
        className={`dropbtn border border-black flex items-center justify-center rounded-[50%] hover:bg-[rgba(0,0,0,0.4)] hover:text-white duration-150`}
        onClick={action}
        disabled={!action}
      >
        <i className={content}></i>
      </button>

      {options && options?.length > 0 && (
        <ul className="dropdown-content bg-[grey] text-white rounded-[5px] whitespace-nowrap text-sm">
          {options.map(({ label, action }, ind) => (
            <li
              className="cursor-pointer p-2 hover:text-black hover:bg-[rgba(255,255,255,0.7)] duration-150"
              onClick={() => action && action(index, level)}
              key={ind}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IconButton;
