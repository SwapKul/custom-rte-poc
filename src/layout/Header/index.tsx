import { useAppSelector } from "@hooks/index";
import { selectLayout } from "@store/layout/layoutSlice";

const Header = () => {
  const {
    headerState: { title },
  } = useAppSelector(selectLayout);
  return (
    <div className="w-full relative justify-center items-center text-white flex h-[50px] bg-secondary-blue">
      {title || "I'm header"}
      <div className="absolute right-5 cursor-pointer rounded-full hover:bg-white hover:text-secondary-blue h-10 w-10 flex items-center justify-center">
        <i className="fa-solid fa-user" />
      </div>
    </div>
  );
};

export default Header;
