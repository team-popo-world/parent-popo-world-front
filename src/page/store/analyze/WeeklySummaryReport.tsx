import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface CategoryData {
  name: string;
  value: number;
  color: string;
}

const categoryData: CategoryData[] = [
  {
    name: "장난감",
    value: 2000,
    color: "#45b7d1",
  },
  {
    name: "간식",
    value: 700,
    color: "#ff6b6b",
  },
  {
    name: "교육",
    value: 500,
    color: "#96ceb4",
  },
  {
    name: "오락",
    value: 200,
    color: "#4ecdc4",
  },
  {
    name: "기타",
    value: 86,
    color: "#ffeaa7",
  },
];

export const WeeklySummaryReport = () => {
  return (
    <div className="bg-white rounded-lg pt-6 pb-4 shadow-sm mb-6 border border-gray-100">
      <h3 className="px-6 text-lg font-semibold text-gray-800 mb-7">카테고리별 소비 비중</h3>

      <div className="w-full h-72 text-sm">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={100}
              paddingAngle={1}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${(value || 0).toLocaleString()}원`, "소비액"]} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
