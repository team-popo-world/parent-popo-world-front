import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell } from "recharts";
import rightArrow from "../../assets/image/common/right-arrow.png";

type LabelListProps = {
  x?: number | string;
  y?: number | string;
  value?: number | string;
  index?: number;
};

export const ProductChart: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState("자녀 1");

  const childrenData = [
    { name: "6월 6일", value: 14 },
    { name: "6월 7일", value: 11 },
    { name: "6월 8일", value: 13 },
    { name: "6월 9일", value: 13 },
  ];

  const maxScoreIndex = childrenData.reduce(
    (maxIndex, current, currentIndex, array) => (current.value > array[maxIndex].value ? currentIndex : maxIndex),
    0
  );

  const BarColor = ["#FE4A4E", "#1DB3FB", "#5BCE06"];

  return (
    <section className="mb-12">
      <div className="border border-gray-200 rounded-2xl shadow-lg bg-white pt-8 pb-4 px-4 w-full max-w-md mx-auto">
        <div className="h-72 flex items-end">
          <ResponsiveContainer className="w-full h-full">
            <BarChart data={childrenData} barCategoryGap={20}>
              <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#A3A3A3", fontSize: 14 }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#A3A3A3", fontSize: 14 }}
                domain={[0, 24]}
                tickCount={7}
                width={30}
                padding={{ top: 0, bottom: 0 }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                <LabelList
                  dataKey="value"
                  position="top"
                  content={({ x, y, value, index }: LabelListProps) =>
                    index === maxScoreIndex ? (
                      <g>
                        <rect
                          x={Number(x) + 36}
                          y={Number(y) - 36}
                          rx={10}
                          width={36}
                          height={28}
                          fill={BarColor[maxScoreIndex]}
                        />
                        <text
                          x={Number(x) + 54}
                          y={Number(y) - 18}
                          textAnchor="middle"
                          fill="#fff"
                          fontWeight={700}
                          fontSize={14}
                        >
                          {Number(value)}
                        </text>
                      </g>
                    ) : null
                  }
                />
                {childrenData.map((entry: { name: string; value: number }, idx: number) => (
                  <Cell key={`cell-${idx}`} fill={BarColor[idx]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
