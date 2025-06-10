import { Outlet } from "react-router-dom";
import { IMAGE_URLS } from "../../constants/constants";

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-300 font-SpoqaHanSansNeo scrollbar-hidden">
      <div
        className="px-8 py-9.5 mx-auto max-w-md min-h-screen relative bg-cover bg-center bg-no-repeat scrollbar-hidden"
        style={{ backgroundImage: `url(${IMAGE_URLS.auth.bg})` }}
      >
        <Outlet />
      </div>
    </div>
  );
};
