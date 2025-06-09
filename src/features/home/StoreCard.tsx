import React from "react";
import { Link } from "react-router-dom";
import defaultChildBoyImage from "../../assets/image/common/boy.png";
import whiteRightArrow from "../../assets/image/common/white-right-arrow.png";

export const StoreCard: React.FC = () => {
  return (
    <div className="w-full h-full shadow-custom rounded-xl">
      <div className="flex justify-between items-center text-xl text-white font-medium px-6 py-3.5 w-full bg-main-blue-300 rounded-t-xl">
        <span className="">상점</span>
        <Link to="/store/product-management">
          <img
            src={whiteRightArrow}
            alt=""
            className="w-6 h-6 p-1 object-contain active:scale-90 transition-all duration-100"
          />
        </Link>
      </div>
      <div className="flex flex-col px-4 py-3.5 text-sm justify-between gap-y-2">
        <h4 className="">구매 요청</h4>
        <div className="flex justify-between items-center bg-gray-200 rounded-xl px-2 py-1">
          <div className="flex items-center gap-x-2">
            <img src={defaultChildBoyImage} alt="" className="w-7 h-7 object-contain" />
            <div className="">자녀1 님의 구매 요청</div>
          </div>
          <div className="">승인</div>
        </div>
        <div className="flex justify-between items-center bg-gray-200 rounded-xl px-2 py-1">
          <div className="flex items-center gap-x-2">
            <img src={defaultChildBoyImage} alt="" className="w-7 h-7 object-contain" />
            <div className="">자녀1 님의 구매 요청</div>
          </div>
          <div className="">승인</div>
        </div>
      </div>
    </div>
  );
};
