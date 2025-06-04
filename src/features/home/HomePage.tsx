import React, { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import defaultParentImage from "../../assets/image/common/parents.png";
import defaultChildBoyImage from "../../assets/image/common/boy.png";
import defaultChildGirlImage from "../../assets/image/common/girl.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell } from "recharts";
import plusIcon from "../../assets/image/common/add-icon.png";
const periods = ["1 day", "1 week", "1 month", "1 year", "All"];
const dataSets: Record<string, { name: string; value: number }[]> = {
  "1 day": [
    { name: "공격적", value: 700 },
    { name: "중립", value: 800 },
    { name: "방어적", value: 978 },
  ],
  "1 week": [
    { name: "공격적", value: 700 },
    { name: "중립", value: 800 },
    { name: "방어적", value: 978 },
  ],
  "1 month": [
    { name: "공격적", value: 500 },
    { name: "중립", value: 600 },
    { name: "방어적", value: 700 },
  ],
  "1 year": [
    { name: "공격적", value: 900 },
    { name: "중립", value: 800 },
    { name: "방어적", value: 700 },
  ],
  All: [
    { name: "공격적", value: 1000 },
    { name: "중립", value: 900 },
    { name: "방어적", value: 800 },
  ],
};

export const HomePage: React.FC = () => {
  const [period, setPeriod] = useState<string>("1 week");
  const data = dataSets[period];
  const maxIndex = data.findIndex(
    (d: { value: number }) => d.value === Math.max(...data.map((d: { value: number }) => d.value))
  );

  return (
    <div className="min-h-screen bg-base-300">
      <div className="mx-auto max-w-md min-h-screen bg-[#F9F9F9] relative">
        <main className="px-4 py-8">
          {/* 대쉬보드 영역 */}
          {/* 상단바 */}
          <div className="flex mb-12">상단바</div>
          {/* 자녀 */}
          <div className="flex w-full mb-5">
            <div className=" flex w-full px-4 py-5 justify-between items-center bg-[#FFFFF5] rounded-xl">
              <div className="flex gap-x-6  rounded-xl">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100">
                  <img src={defaultParentImage} alt="" className="w-3/4 h-3/4 object-contain" />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">부모님닉네임</div>
                  <div className="text-gray-500 text-xs">@부모님이름</div>
                </div>
              </div>
              <div className="px-3.5 py-1 rounded-xl text-white text-xs font-light bg-[#CBE55E]">프로필</div>
            </div>
          </div>
          {/* 자녀 */}
          <div className="flex w-full mb-5">
            <div className=" flex w-full px-4 py-5 justify-between items-center bg-[#FFFFF5] rounded-xl">
              <div className="flex gap-x-6  rounded-xl">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100">
                  <img src={defaultParentImage} alt="" className="w-3/4 h-3/4 object-contain" />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">부모님닉네임</div>
                  <div className="text-gray-500 text-xs">@부모님이름</div>
                </div>
              </div>
              <div className="px-3.5 py-1 rounded-xl text-white text-xs font-light bg-[#CBE55E]">프로필</div>
            </div>
          </div>
          {/* 자녀 */}
          <div className="flex py-5.5 w-full mb-5 bg-[#DBDBDB] justify-center items-center font-extrabold text-lg rounded-xl">
            자녀 추가 등록
            <img src={plusIcon} alt="" className="w-7 h-7 ml-1" />
          </div>{" "}
          <div className="flex mb-5 gap-x-4">
            <div className="w-80 h-60 bg-white rounded-xl">
              <div className="flex items-center font-bold px-6 w-full h-16 bg-[#7ED957] rounded-t-xl">
                <span>상품 관련</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 h-full">
              <div className="w-16 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-15 h-15 bg-gray-200 rounded-full"></div>
              <div className="w-15 h-15 bg-gray-200 rounded-full"></div>
              <div className="w-15 h-15 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          {/* 차트 카드 */}
          <section className="py-2">
            <div className="rounded-2xl shadow-lg bg-white p-4 w-full max-w-md mx-auto">
              {/* 기간 선택 탭 */}
              <div className="flex justify-between mb-4 bg-gray-100 rounded-xl p-1">
                {periods.map((p) => (
                  <button
                    key={p}
                    className={`flex-1 py-1 rounded-xl text-sm font-semibold transition ${
                      period === p ? "bg-white shadow text-green-600" : "text-gray-400"
                    }`}
                    onClick={() => setPeriod(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
              {/* 그래프 */}
              <div className="h-64 flex items-end">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} barCategoryGap={20}>
                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#A3A3A3" }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#A3A3A3" }} domain={[500, 1000]} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      <LabelList
                        dataKey="value"
                        position="top"
                        content={({
                          x,
                          y,
                          value,
                          index,
                        }: {
                          x?: number | string;
                          y?: number | string;
                          value?: number | string;
                          index?: number;
                        }) =>
                          index === maxIndex ? (
                            <g>
                              <rect
                                x={Number(x) - 18}
                                y={Number(y) - 36}
                                rx={10}
                                width={36}
                                height={28}
                                fill="#7ED957"
                              />
                              <text
                                x={Number(x)}
                                y={Number(y) - 18}
                                textAnchor="middle"
                                fill="#fff"
                                fontWeight={700}
                                fontSize={16}
                              >
                                {Number(value)}
                              </text>
                            </g>
                          ) : null
                        }
                      />
                      {data.map((entry: { name: string; value: number }, idx: number) => (
                        <Cell key={`cell-${idx}`} fill={idx === maxIndex ? "#7ED957" : "#E5E7EB"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
