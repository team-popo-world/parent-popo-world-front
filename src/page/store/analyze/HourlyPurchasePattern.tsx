import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface HourlyData {
  hour: string;
  purchases: number;
}

const hourlyData: HourlyData[] = [
  { hour: "0시", purchases: 0 },
  { hour: "1시", purchases: 0 },
  { hour: "2시", purchases: 0 },
  { hour: "3시", purchases: 0 },
  { hour: "4시", purchases: 0 },
  { hour: "5시", purchases: 0 },
  { hour: "6시", purchases: 0 },
  { hour: "7시", purchases: 0 },
  { hour: "8시", purchases: 0 },
  { hour: "9시", purchases: 0 },
  { hour: "10시", purchases: 0 },
  { hour: "11시", purchases: 0 },
  { hour: "12시", purchases: 0 },
  { hour: "13시", purchases: 0 },
  { hour: "14시", purchases: 3 },
  { hour: "15시", purchases: 2 },
  { hour: "16시", purchases: 7 },
  { hour: "17시", purchases: 2 },
  { hour: "18시", purchases: 2 },
  { hour: "19시", purchases: 3 },
  { hour: "20시", purchases: 1 },
  { hour: "21시", purchases: 1 },
  { hour: "22시", purchases: 0 },
  { hour: "23시", purchases: 0 },
];

export const HourlyPurchasePattern = () => {
  return (
    <div className="bg-white rounded-lg shadow-md py-6 mb-6 border border-gray-100">
      <h3 className="px-6 text-lg font-semibold text-gray-900 mb-4">시간대별 구매 패턴</h3>
      <div className="w-full h-72 -ml-7 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value || 0}건`, "구매 횟수"]} />
            <Line type="monotone" dataKey="purchases" stroke="#4ecdc4" strokeWidth={3} dot={{ fill: "#4ecdc4" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
