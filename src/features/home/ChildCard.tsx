import React from "react";

interface ChildCardProps {
  image: string;
  name: string;
  gender: string;
}

export const ChildCard: React.FC<ChildCardProps> = ({ image, name, gender }) => {
  return (
    <div className="flex w-full mb-5 shadow-custom rounded-xl active:scale-95 transition-all duration-100">
      <div className="flex w-full px-4.5 py-4.5 justify-between items-center bg-main-green-400 rounded-xl">
        <div className="flex gap-x-6 rounded-xl">
          <div className="w-13 h-13 flex justify-center items-center rounded-full bg-gray-100">
            <img src={image} alt="" className="w-4/5 h-4/5 object-contain" />
          </div>
          <div className="flex flex-col justify-center gap-y-0.5">
            <div className="text-main-white-500 text-[1.05rem] font-bold">{name}</div>
            <div className="text-main-green-100 text-xs">@{gender}</div>
          </div>
        </div>
        <div className="px-3.5 py-1 rounded-xl text-xs bg-white">프로필</div>
      </div>
    </div>
  );
};
