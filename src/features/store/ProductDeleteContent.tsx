import type { ProductItem } from "../../api/market/type";

export const ProductDeleteContent = ({
  selectedProduct,
  setIsDeleteProductBottomSheetOpen,
  handleDeleteProduct,
}: {
  selectedProduct: ProductItem | null;
  setIsDeleteProductBottomSheetOpen: (isOpen: boolean) => void;
  handleDeleteProduct: () => void;
}) => {
  return (
    <>
      {/* 제목 */}
      <div className="flex items-center gap-x-1 mb-2">
        <div className="">상품 조회</div>
      </div>
      {/* 상품 이미지, 이름, 가격 설정 */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-5">
        <div className="w-40 h-40 aspect-square bg-main-white-500 flex justify-center items-center border-2 border-gray-100 shadow-custom-2 rounded-xl active:scale-95 transition-all duration-100">
          <img src={selectedProduct?.imageUrl || ""} alt="" className="w-1/2 h-1/2 object-contain" />
        </div>
        <div className="flex flex-col gap-y-1 py-3">
          <label htmlFor="" className="text-sm text-black">
            상품 이름
          </label>
          <div className="pl-2 py-1 text-sm text-black border border-gray-100 shadow-custom-2 rounded-md focus:outline-none">
            {selectedProduct?.productName}
          </div>
          <label htmlFor="" className="text-sm text-black mt-3">
            상품 가격
          </label>
          <div className="pl-2 py-1 text-sm text-black border border-gray-100 shadow-custom-2 rounded-md focus:outline-none">
            {selectedProduct?.price}냥
          </div>
        </div>
      </div>

      {/* 상품 등록, 취소 버튼 */}
      <div className="grid grid-cols-2 gap-x-2 w-full ">
        <div
          className="text-center bg-main-red-500 text-main-white-500 text-sm rounded-xl py-3 shadow-custom-2"
          onClick={handleDeleteProduct}
        >
          삭제
        </div>
        <div
          className="text-center bg-main-white-500 text-black text-sm rounded-xl py-3 shadow-custom-2"
          onClick={() => setIsDeleteProductBottomSheetOpen(false)}
        >
          취소
        </div>
      </div>
    </>
  );
};
