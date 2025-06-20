import apiClient, { ApiError } from "../api";

interface StoreProductRequest {
  childId: string;
  productName: string;
  productPrice: number;
  productStock: number;
  productImage: string;
  label: string;
}

interface StoreProductResponse {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
  imageUrl: string;
}

export const LABEL_LIST = {
  FOOD: "먹이",
  SNACK: "간식",
  ENTERTAINMENT: "오락",
  TOY: "장난감",
  EDUCATION: "교육",
  ETC: "기타",
};

const REVERSE_LABEL_LIST = Object.fromEntries(Object.entries(LABEL_LIST).map(([key, value]) => [value, key]));

export const createStoreProduct = async ({
  childId,
  productName,
  productPrice,
  productStock,
  productImage,
  label,
}: StoreProductRequest): Promise<StoreProductResponse | undefined> => {
  try {
    const response = await apiClient.post<StoreProductResponse>("/api/store/parent/products", {
      childId,
      productName,
      productPrice,
      productStock,
      productImage,
      label: REVERSE_LABEL_LIST[label],
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    return undefined;
  }
};
