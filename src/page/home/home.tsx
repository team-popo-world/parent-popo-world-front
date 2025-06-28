import React, { useState, useRef, useEffect } from "react";
import { ChildCard } from "../../features/home/ChildCard";
import defaultChildBoyImage from "../../assets/image/common/boy.png";
import defaultChildGirlImage from "../../assets/image/common/girl.png";
import { PopoButton } from "../../components/button/popoButton";
import { Modal } from "../../components/modal/Modal";
import { useAuthStore } from "../../zustand/auth";
import { Link } from "react-router-dom";
import analyzeCenter from "../../assets/image/common/analyze_center.png";
import { AddButton } from "../../components/button/AddButton";
import { BottomNavBar } from "../../components/nav-bar/BottomNavBar";
import waitPopo from "../../assets/image/common/wait_popo.png";

export const HomePage: React.FC = () => {
  const [isOpenParentCode, setIsOpenParentCode] = useState(false);
  const authStorage = localStorage.getItem("auth-storage");
  const authData = authStorage ? JSON.parse(authStorage) : null;
  const parentCode = authData?.state?.user?.parentCode;
  const { child, selectedChildId, setSelectedChildId } = useAuthStore();

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (selectedChildId && cardContainerRef.current) {
      const selectedIndex = child.findIndex(
        (c) => c.userId === selectedChildId
      );
      if (selectedIndex !== -1 && cardRefs.current[selectedIndex]) {
        cardRefs.current[selectedIndex]?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [selectedChildId, child]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, child.length);
  }, [child]);

  return (
    <>
      <Modal
        isOpen={isOpenParentCode}
        onClose={() => setIsOpenParentCode(false)}
      >
        <div
          className="flex flex-col gap-4 bg-white rounded-3xl p-6 w-72"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 self-start">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h1 className="text-base font-bold text-gray-800">부모 코드</h1>
            </div>
            <div className="w-full bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-blue-500 tracking-wider">
                {parentCode}
              </p>
            </div>
            <p className="text-sm text-gray-500 text-center">
              이 코드를 자녀계정에서 입력해주세요
            </p>
          </div>
        </div>
      </Modal>

      <div className="min-h-screen bg-white font-SpoqaHanSansNeo">
        <div className="mx-auto max-w-md min-h-screen relative pb-10">
          {/* 상단 헤더 */}
          <div className="px-6 space-y-8">
            {/* 헤더 섹션 */}
            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100/80 rounded-2xl blur-md"></div>
                  <div className="relative w-20 h-20 rounded-full from-sky-400/20 via-blue-300/20 to-indigo-300/20 p-2.5 mr-8 ml-[-0.8rem]">
                    <img
                      src="/src/assets/image/common/popo.png"
                      alt="Popo"
                      className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(66,153,225,0.3)]"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    안녕하세요!
                  </h1>
                  <p className="text-sm text-gray-500 font-medium text-center">
                    부모님 환영합니다
                  </p>
                </div>
              </div>
              <Link to="/mypage">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    MY
                  </div>
                </div>
              </Link>
            </div>

            {/* 자녀 선택 섹션 */}
            <div>
              <div
                ref={cardContainerRef}
                className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 pt-2 scrollbar-hidden mt-[-1.5rem]"
              >
                {child.length === 0 ? (
                  <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm flex flex-col items-center justify-center text-center w-full">
                    <img
                      src={waitPopo}
                      alt="No Children"
                      className="w-16 h-16 mb-3"
                    />
                    <p className="text-slate-600 text-sm font-medium">
                      아직 등록된 자녀가 없습니다
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      자녀를 추가해주세요!
                    </p>
                  </div>
                ) : (
                  child.map((childInfo, index) => (
                    <div
                      key={childInfo.userId}
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                    >
                      <ChildCard
                        image={
                          childInfo.sex === "M"
                            ? defaultChildBoyImage
                            : defaultChildGirlImage
                        }
                        child={childInfo}
                        selected={selectedChildId === childInfo.userId}
                        setSelectedChildId={() =>
                          setSelectedChildId(childInfo.userId)
                        }
                      />
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsOpenParentCode(true)}
                  className="mt-[-0.6rem]  flex items-center gap-2 bg-gradient-to-r from-[#4AA8FF] to-[#4B9DFF] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-[#3d8edb] hover:to-[#3d8edb] transition-all duration-200 shadow-sm"
                >
                  <span className="text-xl leading-none">+</span>
                  자녀 추가
                </button>
              </div>
            </div>

            {/* 주요 기능 카드 */}
            <div className="space-y-5 mt-[-0.6rem]">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/invest/scenario-select"
                  className="group relative overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 18.49L9.5 12.48L13.5 16.48L22 6.92001L20.59 5.51001L13.5 13.48L9.5 9.48001L2 16.99L3.5 18.49Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      모의투자
                    </h3>
                    <p className="text-sm text-white/90">시나리오 기반 투자</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                </Link>

                <Link
                  to="/store/product-management"
                  className="group relative overflow-hidden bg-gradient-to-br from-pink-400 via-pink-500 to-rose-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L18.31 6L15.55 11H8.53L8.4 10.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      상점
                    </h3>
                    <p className="text-sm text-white/90">상품 관리 및 거래</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                </Link>

                <Link
                  to="/savings/report"
                  className="group relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      저축
                    </h3>
                    <p className="text-sm text-white/90">저축 현황 및 관리</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                </Link>

                <Link
                  to="/quest/quest-list"
                  className="group relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      퀘스트
                    </h3>
                    <p className="text-sm text-white/90">미션 및 보상 관리</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                </Link>
              </div>
            </div>

            {/* 분석 센터 */}
            <div className="space-y-5">
              <Link to="/analyze" className="block">
                <div className="mt-[-0.8rem] mb-15 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 via-indigo-800/90 to-slate-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-500 backdrop-blur-sm flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                            fill="#FFFFFF"
                          />
                        </svg>
                      </div>
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          종합 분석 센터
                        </h3>
                        <p className="text-sm text-slate-200">
                          자녀의 모든 활동을 분석하고 관리하세요
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl text-white shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                        투자 분석
                      </span>
                      <span className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl text-white shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                        소비 패턴
                      </span>
                      <span className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl text-white shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                        학습 현황
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-white/10 via-indigo-400/5 to-transparent rounded-full transform translate-x-20 -translate-y-20 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-500"></div>
                </div>
              </Link>
            </div>
          </div>
          <BottomNavBar />
        </div>
      </div>
    </>
  );
};
