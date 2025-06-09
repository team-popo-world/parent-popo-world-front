import React from "react";
import broccoli from "../../assets/image/common/broccoli.png";
import donuts from "../../assets/image/common/donuts.png";
import icecream from "../../assets/image/common/icecream.png";

export const QuickIcons: React.FC = () => {
  return (
    <div className="flex flex-col justify-between gap-y-2 h-full">
      <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-100 shadow-custom-2 rounded-full active:scale-90 transition-all duration-100">
        +
      </div>
      <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-100 shadow-custom-2 rounded-full">
        <img src={broccoli} alt="" className="w-3/4 h-3/4 object-contain" />
      </div>
      <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-100 shadow-custom-2 rounded-full">
        <img src={donuts} alt="" className="w-3/4 h-3/4 object-contain" />
      </div>
      <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-100 shadow-custom-2 rounded-full">
        <img src={icecream} alt="" className="w-3/4 h-3/4 object-contain" />
      </div>
    </div>
  );
};
