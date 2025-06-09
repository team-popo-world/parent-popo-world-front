import React from "react";
import { ChildCard } from "../../features/home/ChildCard";
import { StoreCard } from "../../features/home/StoreCard";
import { QuickIcons } from "../../features/home/QuickIcons";
import { InvestmentChart } from "../../features/home/InvestmentChart";
import defaultChildBoyImage from "../../assets/image/common/boy.png";
import defaultChildGirlImage from "../../assets/image/common/girl.png";
import { PopoButton } from "../../components/button/popoButton";
import { AddButton } from "../../components/button/AddButton";

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 환영 문구 */}
      <div className="flex w-full mb-10">
        <div className="flex justify-between items-center gap-x-6">
          <PopoButton onClick={() => {}} />
          <div className="flex">
            <div className="flex flex-col">
              <span className="">안녕하세요!</span>
              <span className="">부모님 환영합니다!</span>
            </div>
          </div>
        </div>
      </div>
      {/* 자녀 카드 */}
      <ChildCard image={defaultChildBoyImage} name="자녀 이름" gender="자녀 성별" />
      <ChildCard image={defaultChildGirlImage} name="자녀 이름" gender="자녀 성별" />

      {/* 자녀 추가 등록 버튼 */}
      <AddButton text="자녀 추가 등록" onClick={() => {}} />

      {/* 상점 화면 */}
      <div className="flex gap-x-6.5 justify-between h-60 mb-5">
        <StoreCard />
        <QuickIcons />
      </div>

      <InvestmentChart />
    </>
  );
};
