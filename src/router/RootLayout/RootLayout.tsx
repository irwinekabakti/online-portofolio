import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#262626]">
      <Sidebar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
