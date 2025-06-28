import { useNavigate, useLocation } from "react-router-dom";
import { useModalStore } from "../../zustand/modal";
import homeIcon from "../../assets/image/navbar/gray_home.png";
import analyzeIcon from "../../assets/image/navbar/gray_chart.png";
import shopIcon from "../../assets/image/navbar/gray_store.png";
import mypageIcon from "../../assets/image/navbar/gray_setup.png";
import greenHomeIcon from "../../assets/image/navbar/green_home.png";
import greenAnalyzeIcon from "../../assets/image/navbar/green_chart.png";
import greenShopIcon from "../../assets/image/navbar/green_store.png";
import greenMypageIcon from "../../assets/image/navbar/green_setup.png";
import { scrollToTop } from "../../utils/scrolltoTop";

interface NavItem {
  icon: string;
  activeIcon: string;
  path: string;
  label: string;
}

// 네비바를 숨길 페이지 경로 목록
const hideNavBarPaths = ["/login", "/signup"];

const navItems: NavItem[] = [
  {
    icon: homeIcon,
    activeIcon: greenHomeIcon,
    path: "/",
    label: "홈",
  },
  {
    icon: analyzeIcon,
    activeIcon: greenAnalyzeIcon,
    path: "/analyze",
    label: "분석",
  },
  {
    icon: shopIcon,
    activeIcon: greenShopIcon,
    path: "/store/product-management",
    label: "상점",
  },
  {
    icon: mypageIcon,
    activeIcon: greenMypageIcon,
    path: "/mypage",
    label: "설정",
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
    navigate(path);
    scrollToTop();
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/50 backdrop-blur-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            className="flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 hover:bg-gray-50/50"
          >
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <img
                src={isActive(item.path) ? item.activeIcon : item.icon}
                alt={`${item.label} icon`}
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`text-xs font-medium ${
                isActive(item.path) ? "text-emerald-500" : "text-gray-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};