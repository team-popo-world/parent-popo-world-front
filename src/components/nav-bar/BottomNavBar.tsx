import { useNavigate, useLocation } from "react-router-dom";
import { useModalStore } from "../../zustand/modal";
import { HiHome, HiShoppingBag, HiChartBar } from "react-icons/hi";
import { scrollToTop } from "../../utils/scrolltoTop";

interface NavItem {
  icon: React.ComponentType<{ className: string }>;
  path: string;
  label: string;
}

// 네비바를 숨길 페이지 경로 목록
const hideNavBarPaths = ["/login", "/signup"];

const navItems: NavItem[] = [
  {
    icon: HiShoppingBag,
    path: "/store/product-management",
    label: "상점",
  },
  {
    icon: HiHome,
    path: "/",
    label: "홈",
  },
  {
    icon: HiChartBar,
    path: "/analyze",
    label: "분석",
  },
];

export const BottomNavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAnyModalOpen = useModalStore((state) => state.isAnyModalOpen);

  // 현재 페이지에서 네비바를 숨길지 확인
  const shouldHideNavBar = () => {
    return (
      hideNavBarPaths.some((path) => location.pathname.startsWith(path)) ||
      isAnyModalOpen
    );
  };

  // 네비바를 숨겨야 하면 null 반환
  if (shouldHideNavBar()) {
    return null;
  }

  const handleNavClick = (path: string) => {
    scrollToTop();
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="opacity-90 fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full z-50 w-[85%] max-w-sm border-5 border-gray-300">
      <div className="flex justify-between items-center py-3 px-8">
        {navItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`relative group flex items-center gap-2 transition-all duration-300 px-2 rounded-full ${
                active ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <Icon
                className={`w-6 h-6 transition-all duration-300 ${
                  active
                    ? "text-blue-500"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  active
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 group-hover:text-gray-700"
                } ${item.path === "/" ? "block" : "hidden"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
