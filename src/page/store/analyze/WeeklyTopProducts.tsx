import React from "react";

interface PopularProduct {
  name: string;
  category: string;
  count: number;
  totalAmount: number;
  avgPrice: number;
}

const popularProducts: PopularProduct[] = [
  {
    name: "레고",
    category: "장난감",
    count: 4,
    totalAmount: 2000,
    avgPrice: 500.0,
  },
  {
    name: "과자",
    category: "간식",
    count: 4,
    totalAmount: 600,
    avgPrice: 150.0,
  },
  {
    name: "학습지",
    category: "교육",
    count: 2,
    totalAmount: 600,
    avgPrice: 300.0,
  },
  {
    name: "초콜릿",
    category: "간식",
    count: 1,
    totalAmount: 100,
    avgPrice: 100.0,
  },
  {
    name: "게임시간",
    category: "오락",
    count: 2,
    totalAmount: 300,
    avgPrice: 150.0,
  },
];

export const WeeklyTopProducts = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🏆 이번 주 인기 상품 TOP 5</h3>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {popularProducts.map((product, index) => (
          <div
            key={`product-${index}`}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-500 w-8">{index + 1}</span>
              <div className="ml-3">
                <p className="font-medium text-gray-900">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{product.count}개</p>
              <p className="text-sm text-gray-500">{Math.round(product.avgPrice).toLocaleString()}원</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
