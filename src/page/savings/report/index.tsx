import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import PopoImg from "../../../assets/image/common/popo.png"; // 여러 개의 저축통장 정보 배열 (가장 최근 통장이 맨 앞에 오도록)
const savingsList = [
  {
    id: 1,
    current: 1200, // 현재 저축 금액
    goal: 2000, // 목표 저축 금액
    start: "2025.06.20", // 시작일
    end: "2025.09.15", // 종료일
    reward: 200, // 목표 달성시 보상
    history: [
      { date: "7월 19일", name: "이현기", amount: 100, total: 2100 },
      { date: "7월 18일", name: "이현기", amount: 100, total: 2000 },
      { date: "7월 17일", name: "이현기", amount: 100, total: 1900 },
      { date: "7월 16일", name: "이현기", amount: 100, total: 1800 },
      { date: "7월 19일", name: "이현기", amount: 100, total: 2100 },
      { date: "7월 18일", name: "이현기", amount: 100, total: 2000 },
      { date: "7월 17일", name: "이현기", amount: 100, total: 1900 },
      { date: "7월 16일", name: "이현기", amount: 100, total: 1800 },
    ],
  },
  {
    id: 2,
    current: 1500,
    goal: 1500,
    start: "2025.03.01",
    end: "2025.06.01",
    reward: 150,
    history: [
      { date: "6월 1일", name: "이현기", amount: 200, total: 1500 },
      { date: "5월 20일", name: "이현기", amount: 100, total: 1300 },
      { date: "5월 10일", name: "이현기", amount: 200, total: 1200 },
    ],
  },
];

export const SavingsReportPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const savingsInfo = savingsList[currentIndex];
  const [showHistory, setShowHistory] = useState(false);

  return (
    // 전체 레이아웃
    <div className="flex flex-col items-center relative">
      {currentIndex > 0 && (
        <button
          className="text-gray-500 absolute left-[-3rem] top-1/2 -translate-y-1/2 text-[5rem] cursor-pointer"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          <MdChevronLeft />
        </button>
      )}
      {/* 카드 전체 박스 */}
      <div className=" w-[20rem] rounded-2xl shadow-md border-gray-200 border-2">
        {/* 카드 상단 정보 */}
        <div className="bg-blue-400 h-[3rem] w-[19.8rem] text-[1.2rem] flex items-center justify-center text-white rounded-t-xl">
          저축 통장
        </div>
        {/* 현재 저축 금액 라벨 */}
        <div className="bg-white p-4 pb-1 ml-2">
          <div className="">현재 저축 금액</div>
          <div className="bg-gray-200 w-fit px-2 rounded-md mt-1">
            {savingsInfo.current}냥
          </div>
        </div>
        <div className="bg-white p-4 pb-1 ml-2">
          <div className="">목표 저축 금액</div>
          <div className="bg-gray-200 w-fit px-2 rounded-md mt-1">
            {savingsInfo.goal}냥
          </div>
        </div>
        <div className="bg-white p-4 pb-1 ml-2">
          <div className="">시작일 ~ 종료일</div>
          <div className="bg-gray-200 w-fit px-2 rounded-md mt-1">
            {savingsInfo.current}냥
          </div>
        </div>
        <div className="bg-white p-4 pb-1 ml-2">
          <div className="">목표 달성시 보상</div>
          <div className="bg-gray-200 w-fit px-2 rounded-md mt-1">
            {savingsInfo.current}냥
          </div>
        </div>{" "}
        <div className="bg-white p-4 pb-1 ml-2">
          <div className="">목표 달성 현황</div>
          <div className="bg-gray-200 w-fit px-2 rounded-md mt-1">
            <span className="font-bold">{savingsInfo.current}</span> /{" "}
            {savingsInfo.goal}냥
          </div>
          <div>
            {Math.round((savingsInfo.current / savingsInfo.goal) * 100)}%
          </div>
        </div>
        <button
          className="block bg-blue-800 text-white mx-auto cursor-pointer px-2 py-1 rounded-md my-5"
          onClick={() => setShowHistory((prev) => !prev)}
        >
          저축 내역 보기
        </button>
        {showHistory && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white h-[32rem] w-[20rem] rounded-2xl overflow-y-auto relative">
              <div className="bg-blue-800 h-[3rem] text-[1.2rem] flex items-center justify-center text-white sticky top-0 z-10">
                저축내역
                <button
                  className="cursor-pointer text-[1rem] text-blue-800 font-bold absolute right-3 bg-gray-100 rounded-full w-6 h-6 text-center"
                  onClick={() => setShowHistory(false)}
                >
                  ×
                </button>
              </div>
              {savingsInfo.history.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="bg-purple-200 w-15 h-15 rounded-xl mt-8 ml-5 flex items-center justify-center relative">
                    <img src={PopoImg} alt="포포" className="w-12 h-12" />
                    <span className="absolute text-sm top-[-1.3rem]">
                      {item.date}
                    </span>
                  </div>
                  <div className="text-lg mt-8 ml-[-7rem]">{item.name}</div>
                  <div className="flex flex-col mr-5 mt-8">
                    <span className="text-blue-500">+{item.amount}</span>
                    <span>{item.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {currentIndex < savingsList.length - 1 && (
          <button
            className="text-gray-500 absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[5rem] cursor-pointer"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            <MdChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};
