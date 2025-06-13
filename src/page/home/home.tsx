import React, { useState } from "react";
import { ChildCard } from "../../features/home/ChildCard";
import { StoreCard } from "../../features/home/StoreCard";
import { QuickIcons } from "../../features/home/QuickIcons";
import { InvestmentChart } from "../../features/home/InvestmentChart";
import defaultChildBoyImage from "../../assets/image/common/boy.png";
import defaultChildGirlImage from "../../assets/image/common/girl.png";
import { PopoButton } from "../../components/button/popoButton";
import { AddButton } from "../../components/button/AddButton";
import { Modal } from "../../components/modal/Modal";
import { useAuthStore } from "../../zustand/auth";

export const HomePage: React.FC = () => {
  const [isOpenParentCode, setIsOpenParentCode] = useState(false);
  const authStorage = localStorage.getItem("auth-storage");
  const authData = authStorage ? JSON.parse(authStorage) : null;
  const parentCode = authData?.state?.user?.parentCode;
  const { logout } = useAuthStore();
  return (
    <>
      <Modal isOpen={isOpenParentCode} onClose={() => setIsOpenParentCode(false)}>
        <div className="flex flex-col gap-4 bg-white rounded-3xl p-4" onClick={(e) => e.stopPropagation()}>
          <h1>부모 코드</h1>
          <p>{parentCode}</p>
        </div>
      </Modal>

      {/* 환영 문구 */}
      <div className="flex w-full mb-10">
        <div className="flex justify-between items-center gap-x-6">
          <PopoButton onClick={() => {}} />
          <div className="flex">
            <div className="flex flex-col">
              <span className="">안녕하세요!</span>
              <span className="">부모님 환영합니다!</span>
              <span className="" onClick={logout}>
                로그아웃
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 자녀 카드 */}
      <ChildCard image={defaultChildBoyImage} name="자녀 이름" gender="자녀 성별" />
      <ChildCard image={defaultChildGirlImage} name="자녀 이름" gender="자녀 성별" />

      {/* 자녀 추가 등록 버튼 */}
      <AddButton text="자녀 추가 등록" onClick={() => setIsOpenParentCode(true)} />

      {/* 상점 화면 */}
      <div className="flex gap-x-6.5 justify-between h-60 mb-5">
        <StoreCard />
        <QuickIcons />
      </div>

      <InvestmentChart />
    </>
  );
};
