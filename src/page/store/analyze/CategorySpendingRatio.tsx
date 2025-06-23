import React from "react";

interface Metrics {
  thisWeekTotal: number;
  weeklyChange: number;
  mostPopularCategory: string;
  educationRatio: number;
  totalPurchases: number;
  avgPurchaseAmount: number;
}

const metrics: Metrics = {
  thisWeekTotal: 3186,
  weeklyChange: 574.1052631578948,
  mostPopularCategory: "장난감",
  educationRatio: 16.135693215339235,
  totalPurchases: 21,
  avgPurchaseAmount: 151.71428571428572,
};

// 카테고리별 데이터
const categoryData = [
  { name: "장난감", value: 2000, color: "#45b7d1" },
  { name: "간식", value: 700, color: "#ff6b6b" },
  { name: "교육", value: 500, color: "#96ceb4" },
  { name: "오락", value: 200, color: "#4ecdc4" },
  { name: "기타", value: 86, color: "#ffeaa7" },
];

// 인기 상품 데이터
const popularProducts = [
  { name: "레고", category: "장난감", count: 4, totalAmount: 2000, avgPrice: 500.0 },
  { name: "과자", category: "간식", count: 4, totalAmount: 600, avgPrice: 150.0 },
  { name: "학습지", category: "교육", count: 2, totalAmount: 600, avgPrice: 300.0 },
  { name: "초콜릿", category: "간식", count: 1, totalAmount: 100, avgPrice: 100.0 },
  { name: "게임시간", category: "오락", count: 2, totalAmount: 300, avgPrice: 150.0 },
];

export const CategorySpendingRatio = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 카테고리별 소비 비율</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{metrics.totalPurchases}</p>
          <p className="text-sm text-blue-800">총 구매 건수</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">{categoryData.length}</p>
          <p className="text-sm text-green-800">구매한 카테고리</p>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <p className="text-2xl font-bold text-purple-600">{popularProducts.length}</p>
          <p className="text-sm text-purple-800">구매한 상품 종류</p>
        </div>
      </div>
    </div>
  );
};
