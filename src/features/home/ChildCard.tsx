import React from "react";
import type { Child } from "../../zustand/auth";

interface ChildCardProps {
  image: string;
  child: Child;
}

// name: string;
// sex: string;
// point: number;
// age: number;
// email: string;
// userId: string;
// createdAt: string;

export const ChildCard: React.FC<ChildCardProps> = ({ image, child }) => {
  return (
    <div className="min-w-[19rem] min-h-[16rem] text-main-gray-500 flex flex-col px-4 pt-4  bg-white/75 shadow-lg rounded-xl">
      {/* 이미지, 이름 */}
      <div className="flex gap-x-2 rounded-xl mb-6">
        <div className="w-13 h-13 flex justify-center items-center rounded-full bg-gray-100">
          <img src={image} alt="" className="w-4/5 h-4/5 object-contain" />
        </div>
        <div className="flex flex-col justify-center gap-y-0.5">
          <div className="text-base font-bold">{child.name}</div>
          <div className="text-sm">@ {child.sex === "M" ? "남자" : "여자"}</div>
        </div>
      </div>
      {/* 프로필 버튼 */}
      <div className="font-bold mb-0.5 ml-2">보유 포인트: {child.point}</div>
      <div className="font-bold mb-0.5 ml-2">저축 포인트: {child.point}</div>
      <div className="font-bold mb-0.5 ml-2">이메일: {child.email}</div>
      <div className="font-bold mb-0.5 ml-2">가입일자: {child.createdAt.slice(0, 10).replace(/-/g, ".")}</div>
    </div>
  );
};
