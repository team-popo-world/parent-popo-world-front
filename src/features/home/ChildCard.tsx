import React from "react";
import type { Child } from "../../zustand/auth";
import clsx from "clsx";

interface ChildCardProps {
  image: string;
  child: Child;
  selected: boolean;
  setSelectedChildId: () => void;
}

// name: string;
// sex: string;
// point: number;
// age: number;
// email: string;
// userId: string;
// createdAt: string;

export const ChildCard: React.FC<ChildCardProps> = ({
  image,
  child,
  selected,
  setSelectedChildId,
}) => {
  return (
    <div
      className={`relative min-w-[12rem] p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 focus:outline-none ${
        selected
          ? "bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-500 shadow-lg hover:shadow-xl"
          : "bg-gradient-to-br from-sky-400/30 via-blue-400/30 to-indigo-500/30 shadow-lg hover:shadow-xl"
      }`}
      onClick={setSelectedChildId}
      tabIndex={0}
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={`${child.name}의 프로필`}
          className="w-12 h-12 rounded-xl object-cover border-2 border-gray-200"
        />
        <div>
          <h3
            className={clsx(
              "font-bold",
              selected ? "text-white" : "text-gray-900"
            )}
          >
            {child.name}
          </h3>
          <p
            className={clsx(
              "text-sm",
              selected ? "text-white/90" : "text-gray-500"
            )}
          >
            {child.age}세
          </p>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        <div
          className={`flex items-center justify-between ${
            selected ? "text-white" : "text-gray-700"
          }`}
        >
          <span className="text-sm font-medium">보유 포인트</span>
          <span className="font-bold">{child.point.toLocaleString()}P</span>
        </div>

        <div
          className={`flex items-center justify-between ${
            selected ? "text-white" : "text-gray-700"
          }`}
        >
          <span className="text-sm font-medium">성별</span>
          <span className="font-bold">
            {child.sex === "M" ? "남자" : "여자"}
          </span>
        </div>
      </div>

      {/* 장식용 그라데이션 원 */}
      <div
        className={`absolute top-0 right-0 w-40 h-40 rounded-full transform translate-x-10 -translate-y-10 transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8 ${
          selected
            ? "bg-gradient-to-br from-white/20 to-transparent"
            : "bg-gradient-to-br from-sky-50/30 to-transparent"
        }`}
      ></div>
    </div>
  );
};
