import React, { useState } from "react";

// 여러 개의 저축통장 정보 배열 (가장 최근 통장이 맨 앞에 오도록)
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
  

  return (
    // 전체 레이아웃
    <div className="flex flex-col items-center relative">
      {/* 카드 전체 박스 */}
      <div className="h-[31rem] w-[20rem] rounded-2xl shadow-md border-gray-200 border-2">
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
      </div>
    </div>
  );
};
