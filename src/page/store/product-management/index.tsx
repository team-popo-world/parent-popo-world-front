import React, { useState } from "react";
import { AddButton } from "../../../components/button/AddButton";
import { BottomSheet } from "../../../components/bottom-sheet/BottomSheet";
import { IMAGE_URLS } from "../../../constants/constants";
import addIcon from "@/assets/image/common/add-icon.png";
import coinIcon from "@/assets/image/common/common_coin.webp";

const items = [
  {
    name: "노트북 30분하기",
    image: IMAGE_URLS.items.donut,
    price: 100,
  },
  {
    name: "노트북 1시간하기",
    image: IMAGE_URLS.items.icecream,
    price: 200,
  },
  {
    name: "노트북 2시간하기",
    image: IMAGE_URLS.items.cookie,
    price: 300,
  },
  {
    name: "노트북 3시간하기",
    image: IMAGE_URLS.items.cookie,
    price: 400,
  },
];

const defaultImages = Object.values(IMAGE_URLS.items);

interface Product {
  name: string;
  image: string;
  price: number;
}

export const ProductManagementPage: React.FC = () => {
  const [isAddProductBottomSheetOpen, setIsAddProductBottomSheetOpen] = useState(false);
  const [isEditProductBottomSheetOpen, setIsEditProductBottomSheetOpen] = useState(false);
  const [selectedAddProductImage, setSelectedAddProductImage] = useState(defaultImages[0]);
  const [selectedEditProduct, setSelectedEditProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedEditProduct(product);
    setIsEditProductBottomSheetOpen(true);
  };

  return (
    <>
      {/* 상품 추가 등록 */}
      <h5 className="text-sm mb-1">상품 등록하기</h5>
      <AddButton text="상품 추가 등록" onClick={() => setIsAddProductBottomSheetOpen(true)} />

      {/* 상품 조회 */}
      <h5 className="text-sm mb-1">상품 조회하기</h5>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        {items.map((item) => (
          <div className="flex flex-col gap-y-2" onClick={() => handleProductClick(item)}>
            <div className="flex w-full aspect-square bg-main-white-500 justify-center items-center border-2 border-gray-100 text-lg shadow-custom-2 rounded-xl active:scale-95 transition-all duration-100">
              <img src={item.image} alt={item.name} className="w-1/2 h-1/2 object-contain" />
            </div>
            <div className="flex flex-col gap-y-0.5 px-0.5">
              <span className="text-xs text-black">{item.name}</span>
              <div className="flex gap-1 items-center">
                <img src={coinIcon} alt="" className="w-3 h-3 object-contain" />
                <span className="text-xs text-black ">{item.price}냥</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 상품 추가 Bottom Sheet */}
      <BottomSheet isOpen={isAddProductBottomSheetOpen} onClose={() => setIsAddProductBottomSheetOpen(false)}>
        {/* 제목 */}
        <div className="flex items-center gap-x-1 mb-2">
          <div className="">상품 추가등록</div>
          <img src={addIcon} alt="" className="w-8 h-8 object-contain" />
        </div>
        {/* 상품 이미지, 이름, 가격 설정 */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-5">
          <div className="w-40 h-40 aspect-square bg-main-white-500 flex justify-center items-center border-2 border-gray-100 shadow-custom-2 rounded-xl active:scale-95 transition-all duration-100">
            <img src={selectedAddProductImage} alt="" className="w-1/2 h-1/2 object-contain" />
          </div>
          <div className="flex flex-col gap-y-1 py-3">
            <label htmlFor="" className="text-sm text-black">
              상품 이름
            </label>
            <input
              type="text"
              className="pl-2 py-1 text-sm text-black border border-gray-100 shadow-custom-2 rounded-md focus:outline-none"
            />
            <label htmlFor="" className="text-sm text-black mt-3">
              상품 가격
            </label>
            <input
              type="text"
              className="pl-2 py-1 text-sm text-black border border-gray-100 shadow-custom-2 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* 기본 이미지들  */}
        <h5 className="text-sm mb-1">기본 이미지</h5>
        <div className="flex gap-x-3.5 pb-2 mb-6 overflow-x-auto scrollbar-hidden">
          {defaultImages.map((image, index) => (
            <div
              key={index}
              className="w-15 h-15 aspect-square bg-main-white-500 flex justify-center items-center border-2 border-gray-100 shadow-custom-2 rounded-xl active:scale-95 transition-all duration-100"
              onClick={() => setSelectedAddProductImage(image)}
            >
              <img src={image} alt="" className="w-1/2 h-1/2 object-contain" />
            </div>
          ))}
        </div>
        {/* 상품 등록, 취소 버튼 */}
        <div className="grid grid-cols-2 gap-x-2 w-full ">
          <div
            className="text-center bg-main-green-400 text-main-white-500 text-sm rounded-xl py-3 shadow-custom-2"
            onClick={() => setIsAddProductBottomSheetOpen(false)}
          >
            상품 등록
          </div>
          <div
            className="text-center bg-main-white-500 text-black text-sm rounded-xl py-3 shadow-custom-2"
            onClick={() => setIsAddProductBottomSheetOpen(false)}
          >
            취소
          </div>
        </div>
      </BottomSheet>
      {/* 상품 수정 Bottom Sheet */}
      <BottomSheet isOpen={isEditProductBottomSheetOpen} onClose={() => setIsEditProductBottomSheetOpen(false)}>
        {/* 제목 */}
        <div className="flex items-center gap-x-1 mb-2">
          <div className="">상품 조회</div>
        </div>
        {/* 상품 이미지, 이름, 가격 설정 */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-5">
          <div className="w-40 h-40 aspect-square bg-main-white-500 flex justify-center items-center border-2 border-gray-100 shadow-custom-2 rounded-xl active:scale-95 transition-all duration-100">
            <img src={selectedEditProduct?.image} alt="" className="w-1/2 h-1/2 object-contain" />
          </div>
          <div className="flex flex-col gap-y-1 py-3">
            <label htmlFor="" className="text-sm text-black">
              상품 이름
            </label>
            <div className="pl-2 py-1 text-sm text-black border border-gray-100 shadow-custom-2 rounded-md focus:outline-none">
              {selectedEditProduct?.name}
            </div>
            <label htmlFor="" className="text-sm text-black mt-3">
              상품 가격
            </label>
            <div className="pl-2 py-1 text-sm text-black border border-gray-100 shadow-custom-2 rounded-md focus:outline-none">
              {selectedEditProduct?.price}냥
            </div>
          </div>
        </div>

        {/* 상품 등록, 취소 버튼 */}
        <div className="grid grid-cols-2 gap-x-2 w-full ">
          <div
            className="text-center bg-main-red-500 text-main-white-500 text-sm rounded-xl py-3 shadow-custom-2"
            onClick={() => setIsEditProductBottomSheetOpen(false)}
          >
            삭제
          </div>
          <div
            className="text-center bg-main-white-500 text-black text-sm rounded-xl py-3 shadow-custom-2"
            onClick={() => setIsEditProductBottomSheetOpen(false)}
          >
            취소
          </div>
        </div>
      </BottomSheet>
    </>
  );
};
