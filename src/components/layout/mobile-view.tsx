import { Outlet } from "react-router-dom";
import { NavBar } from "../nav-bar/NavBar";

export const MobileView: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-300 font-SpoqaHanSansNeo">
      <div className="px-8 py-9.5 mx-auto max-w-md min-h-screen bg-main-white-500 relative">
        <Outlet />
        <NavBar />
      </div>
    </div>
  );
};
