/* eslint-disable @typescript-eslint/no-explicit-any */
const Container = ({ children }: { children: any; classes?: string }) => {
  return (
    <div
      className={`flex flex-col gap w-full h-full p-4 rounded-[5px] bg-white overflow-y-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
