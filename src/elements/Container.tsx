/* eslint-disable @typescript-eslint/no-explicit-any */
const Container = ({ children, style }: { children: any; style?: any }) => {
  return (
    <div
      className={`flex flex-col gap w-full h-full p-4 rounded-[5px] bg-white overflow-y-auto`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
