import React, { useEffect, useRef, useState } from "react";
import { AddButton } from "../../../components/button/AddButton";
import { BottomSheet } from "../../../components/bottom-sheet/BottomSheet";
import { IMAGE_URLS } from "../../../constants/constants";
import coinIcon from "@/assets/image/common/common_coin.webp";
import { ProductRegisterContent } from "../../../features/store/ProductResisterContent";
import { createStoreProduct } from "../../../api/market/registerProduct";
import { useAuthStore } from "../../../zustand/auth";
import { useModalStore } from "../../../zustand/modal";
import { getStoreItems } from "../../../api/market/getStoreItems";
import { deleteStoreProduct } from "../../../api/market/deleteProduct";
import { LABEL_LIST } from "../../../api/market/registerProduct";
import type { ProductItem } from "../../../api/market/type";
import type { __ProductItem } from "../../../api/market/getStoreItems";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { uploadImageToCloudinary } from "../../../components/cloudinary/cloudinary";
import { postPushMessage } from "../../../api/push/postPushMessage";
import { ProductDeleteContent } from "../../../features/store/ProductDeleteContent";

export const ProductManagementPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [isAddProductBottomSheetOpen, setIsAddProductBottomSheetOpen] = useState(false);
  const [isDeleteProductBottomSheetOpen, setIsDeleteProductBottomSheetOpen] = useState(false);
  const { openModal, closeModal } = useModalStore();
  const [selectedAddProduct, setSelectedAddProduct] = useState<ProductItem | null>({
    productName: "",
    price: null,
    image: null,
    imageUrl: IMAGE_URLS.items.donut,
    label: "",
  });
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  // 상품 카테고리 드롭다운
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 상품 리스트
  const [items, setItems] = useState<ProductItem[]>([]);
  const { selectedChildId } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  // 상품 조회
  const { data: storeItems, isSuccess } = useQuery({
    queryKey: ["storeItems", selectedChildId],
    queryFn: () => getStoreItems(selectedChildId || ""),
    enabled: !!selectedChildId,
  });

  // 상품 추가
  const createProductMutation = useMutation({
    mutationFn: (product: ProductItem) =>
      createStoreProduct({
        childId: selectedChildId || "",
        productName: product.productName || "",
        productPrice: product.price || 0,
        productImage: product.imageUrl || "",
        label: product.label || "",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["storeItems", selectedChildId],
      });
      if (selectedChildId) {
        console.log("selectedChildId", selectedChildId);
        postPushMessage({ childId: selectedChildId, message: "부모님이 상품을 등록 해주셨어!" });
      }
    },
  });

  // 상품 삭제
  const deleteProductMutation = useMutation({
    mutationFn: (productId: string) => deleteStoreProduct({ childId: selectedChildId || "", productId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["storeItems", selectedChildId],
      });
      // 삭제 완료 메시지 표시
      alert("삭제가 완료됐습니다");
    },
  });

  useEffect(() => {
    if (!selectedChildId || !storeItems || !isSuccess) return;
    const productItems: ProductItem[] = storeItems.map((item: __ProductItem) => ({
      productId: item.id,
      productName: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      label: item.label,
    }));
    setItems(productItems);
  }, [selectedChildId, storeItems, isSuccess]);

  const handleProductClick = (product: ProductItem) => {
    console.log("handleProductClick", product);
    setSelectedProduct(product);
    setIsDeleteProductBottomSheetOpen(true);
  };

  const handleAddProduct = async () => {
    // 상품 구매중에 버튼 연속으로 누르지 못하게
    if (isLoading) return;
    setIsLoading(true);

    try {
      if (!selectedChildId || !selectedAddProduct) {
        alert("자녀를 선택해주세요");
        return;
      }

      // 필수 필드 검증
      if (!selectedAddProduct.productName?.trim()) {
        alert("상품 이름을 입력해주세요.");
        return;
      }

      if (!selectedAddProduct.label) {
        alert("상품 카테고리를 선택해주세요.");
        return;
      }

      if (!selectedAddProduct.price || selectedAddProduct.price <= 0) {
        alert("상품 가격을 입력해주세요.");
        return;
      }

      if (!selectedAddProduct.imageUrl && !selectedAddProduct.image) {
        alert("상품 이미지를 선택해주세요.");
        return;
      }

      console.log("selectedAddProduct", selectedAddProduct);
      let uploadedImageUrl;
      if (selectedAddProduct.image) {
        const uploaded = await uploadImageToCloudinary(selectedAddProduct.image);
        if (!uploaded) {
          alert("이미지 업로드 실패");
          return;
        }
        uploadedImageUrl = uploaded;
      }

      const product = {
        ...selectedAddProduct,
        imageUrl: uploadedImageUrl ? uploadedImageUrl : selectedAddProduct.imageUrl,
      };
      console.log("product", product);
      createProductMutation.mutate(product);

      setIsAddProductBottomSheetOpen(false);
      setSelectedAddProduct({
        productName: "",
        price: 0,
        imageUrl: uploadedImageUrl ? uploadedImageUrl : IMAGE_URLS.items.donut,
        label: "",
      });
    } catch (error) {
      console.error("상품 추가 중 오류 발생:", error);
      alert("상품 추가 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateProductModalOpen = () => {
    setIsAddProductBottomSheetOpen(true);
    openModal();
  };

  const handleCreateProductModalClose = () => {
    setIsAddProductBottomSheetOpen(false);
    closeModal();
  };

  const handleDeleteProduct = async () => {
    if (!selectedChildId || !selectedProduct) return;

    // 삭제 완료 메시지 표시
    alert("삭제가 완료됐습니다");

    deleteProductMutation.mutate(selectedProduct.productId || "");
    setIsDeleteProductBottomSheetOpen(false);
    setSelectedProduct(null);
    postPushMessage({ childId: selectedChildId, message: "부모님이 상품을 삭제 했어!" });
  };

  return (
    <>
      {/* 상품 추가 등록 */}
      <h5 className="text-sm mb-1">상품 등록하기</h5>
      <AddButton
        text="상품 추가 등록"
        onClick={handleCreateProductModalOpen}
        className="border-2 border-gray-100 shadow-custom-2  mb-10"
      />

      {/* 상품 조회 */}
      <h5 className="text-sm mb-1">상품 조회하기</h5>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4 ">
        {items.map((item) => (
          <div key={item.productId} className="flex flex-col gap-y-2" onClick={() => handleProductClick(item)}>
            <div className="relative flex w-full aspect-square bg-main-white-500 justify-center items-center border-2 border-gray-100 text-lg shadow-custom-2 rounded-xl active:scale-95 transition-all duration-100">
              <img src={item.imageUrl || ""} alt={item.productName} className="w-5/6 aspect-square object-contain" />
              {/* 라벨 */}
              {item.label && (
                <div className="absolute top-1 right-1 bg-main-green-400 text-main-white-500 text-xs rounded-full px-1 py-0.5">
                  {LABEL_LIST[item.label as keyof typeof LABEL_LIST]}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-0.5 px-0.5">
              <span className="text-xs text-black">{item.productName}</span>
              <div className="flex gap-1 items-center">
                <img src={coinIcon} alt="" className="w-3 h-3 object-contain" />
                <span className="text-xs text-black ">{item.price}냥</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 상품 추가 Bottom Sheet */}
      <BottomSheet isOpen={isAddProductBottomSheetOpen} onClose={handleCreateProductModalClose}>
        <ProductRegisterContent
          selectedAddProduct={selectedAddProduct}
          setSelectedAddProduct={setSelectedAddProduct}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          dropdownRef={dropdownRef}
          onConfirm={handleAddProduct}
          onClose={handleCreateProductModalClose}
        />
      </BottomSheet>
      {/* 상품 삭제 Bottom Sheet */}
      <BottomSheet isOpen={isDeleteProductBottomSheetOpen} onClose={() => setIsDeleteProductBottomSheetOpen(false)}>
        <ProductDeleteContent
          selectedProduct={selectedProduct}
          setIsDeleteProductBottomSheetOpen={setIsDeleteProductBottomSheetOpen}
          handleDeleteProduct={handleDeleteProduct}
        />
      </BottomSheet>
    </>
  );
};
