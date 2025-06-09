import React from "react";
import { PopoButton } from "../../components/button/popoButton";

export const WelcomeSection: React.FC = () => {
  return (
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
  );
};
