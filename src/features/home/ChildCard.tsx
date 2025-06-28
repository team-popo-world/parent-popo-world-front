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
      className={`relative min-w-[12rem] p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? "bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-500 shadow-lg hover:shadow-xl"
          : "bg-white shadow-md hover:shadow-lg border border-sky-50/50"
      }`}
      onClick={setSelectedChildId}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-xl overflow-hidden ${
              selected
                ? "ring-2 ring-white/30 shadow-inner"
                : "ring-1 ring-sky-100/30"
            }`}
          >
            <img
              src={image}
              alt={child.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h3
              className={`text-lg font-bold mb-1 ${
                selected ? "text-white" : "text-gray-900"
              }`}
            >
              {child.name}
            </h3>
            <div
              className={`text-sm ${
                selected ? "text-sky-100" : "text-sky-500"
              }`}
            >
              {child.age}세
            </div>
          </div>
        </div>

        <div className="space-y-3">
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
