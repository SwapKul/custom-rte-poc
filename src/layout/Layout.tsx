/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full h-[100vh] flex">
      <Sidebar />
      <div className="w-full h-[100vh] bg-[#c3cfe9]">
        <Header />
        <div className="h-[calc(100vh-50px)] p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
