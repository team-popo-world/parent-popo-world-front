import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { ChildNavBar } from "../../components/nav-bar/ChildNavBar";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/scrolltoTop";
import clsx from "clsx";

const urls = {
  index: "분석센터",
  store: "상점 분석",
  invest: "모의투자 분석",
  quest: "퀘스트 분석",
};

export const AnalyzeCenterLayout: React.FC = () => {
  const url = useLocation();
  const pathname = url.pathname.split("/")[2];
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(urls[pathname as keyof typeof urls]);
  const navigate = useNavigate();

  // URL 변경 시 탭 업데이트
  useEffect(() => {
    setIsTabOpen(false);
    const tabName = urls[pathname as keyof typeof urls];
    if (tabName) {
      setSelectedTab(tabName);
    } else {
      setSelectedTab("분석센터");
    }
  }, [pathname]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Header
        title={selectedTab || "분석센터"}
        onClick={() => setIsTabOpen(!isTabOpen)}
        backButtonOnClick={() => navigate(`${selectedTab === "분석센터" ? "/" : "/analyze"}`)}
      >
        {isTabOpen && (
          <ul className="absolute top-16 -right-2.5 flex flex-col bg-white px-2.5 py-2 rounded-xl shadow-custom-2 border border-gray-100 items-center gap-y-1">
            <Link to="/analyze/invest" className="w-full">
              <li
                className={clsx(
                  "text-base active:scale-95 transition-all duration-100",
                  selectedTab === "모의투자 분석" ? "text-black font-medium" : "text-gray-400"
                )}
                onClick={() => setSelectedTab("모의투자 분석")}
              >
                모의투자 분석
              </li>
            </Link>
            <Link to="/analyze/store" className="w-full">
              <li
                className={clsx(
                  "text-base active:scale-95 transition-all duration-100 ",
                  selectedTab === "상점 분석" ? "text-black font-medium" : "text-gray-400"
                )}
                onClick={() => setSelectedTab("상점 분석")}
              >
                상점 분석
              </li>
            </Link>
            <Link to="/analyze/quest" className="w-full">
              <li
                className={clsx(
                  "text-base active:scale-95 transition-all duration-100",
                  selectedTab === "퀘스트 분석" ? "text-black font-medium" : "text-gray-400"
                )}
                onClick={() => setSelectedTab("퀘스트 분석")}
              >
                퀘스트 분석
              </li>
            </Link>
          </ul>
        )}
      </Header>
      <ChildNavBar selectedColor={"#000000"} />
      <Outlet />
    </>
  );
};
