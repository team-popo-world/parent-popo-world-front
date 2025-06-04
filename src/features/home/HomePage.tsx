import React, { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import defaultParentImage from "../../assets/image/common/parents.png";
import defaultChildBoyImage from "../../assets/image/common/boy.png";
import defaultChildGirlImage from "../../assets/image/common/girl.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell } from "recharts";
import plusIcon from "../../assets/image/common/add-icon.png";
import broccoli from "../../assets/image/common/broccoli.png";
import donuts from "../../assets/image/common/donuts.png";
import icecream from "../../assets/image/common/icecream.png";
import rightArrow from "../../assets/image/common/right-arrow.png";

type LabelListProps = {
  x?: number | string;
  y?: number | string;
  value?: number | string;
  index?: number;
};

export const HomePage: React.FC = () => {
  // 자녀 선택 상태
  const [selectedChild, setSelectedChild] = useState("자녀 1");

  // 자녀별 점수 데이터
  const childrenData = [
    { name: "공격적", value: 14 },
    { name: "안정적", value: 11 },
    { name: "소극적", value: 13 },
  ];

  // 최고 점수를 가진 자녀의 인덱스
  const maxScoreIndex = childrenData.reduce(
    (maxIndex, current, currentIndex, array) => (current.value > array[maxIndex].value ? currentIndex : maxIndex),
    0
  );

  const BarColor = ["#FE4A4E", "#1DB3FB", "#5BCE06"];

  return (
    <div className="min-h-screen bg-base-300 font-GmarketSans">
      <div className="mx-auto max-w-md min-h-screen bg-main-white-500 relative">
        <main className="px-6 pt-10 pb-10">
          {/* 상단바 */}
          <div className="flex w-full mb-10 ">
            <div className="flex justify-between items-center gap-x-6">
              <div className="flex items-center justify-center w-13 h-13 rounded-full bg-white">
                <img src={defaultParentImage} alt="" className="w-5/6 h-5/6 object-contain" />
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <div className="">안녕하세요!</div>
                  <div className="">부모님 환영합니다!</div>
                </div>
              </div>
            </div>
          </div>
          {/* 자녀 */}
          <div className="flex w-full mb-5 shadow-custom rounded-xl">
            <div className=" flex w-full px-4.5 py-5 justify-between items-center bg-main-green-400 rounded-xl">
              <div className="flex gap-x-6  rounded-xl">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100">
                  <img src={defaultChildBoyImage} alt="" className="w-3/4 h-3/4 object-contain" />
                </div>
                <div className="flex flex-col ">
                  <div className="text-main-white-500 font-bold">자녀 이름</div>
                  <div className="text-main-green-100 text-xs">@자녀 성별</div>
                </div>
              </div>
              <div className="px-3.5 py-1 rounded-xl text-xs  bg-white">프로필</div>
            </div>
          </div>
          {/* 자녀 */}
          <div className="flex w-full mb-5 shadow-custom rounded-xl">
            <div className=" flex w-full px-4.5 py-5 justify-between items-center bg-main-green-400 rounded-xl">
              <div className="flex gap-x-6  rounded-xl">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100">
                  <img src={defaultChildGirlImage} alt="" className="w-3/4 h-3/4 object-contain" />
                </div>
                <div className="flex flex-col ">
                  <div className="text-main-white-500 font-bold">자녀 이름</div>
                  <div className="text-main-green-100 text-xs">@자녀 성별</div>
                </div>
              </div>
              <div className="px-3.5 py-1 rounded-xl text-xs  bg-white">프로필</div>
            </div>
          </div>
          {/* 자녀 */}
          <div className="flex py-5.5 w-full mb-10 bg-main-white-500 justify-center items-center border-2 border-gray-100 text-lg shadow-custom rounded-xl">
            자녀 추가 등록
            <img src={plusIcon} alt="" className="w-7 h-7 ml-1" />
          </div>
          {/* 상점 카드 */}
          <div className="flex gap-x-6.5 justify-between h-60 mb-5">
            <div className="w-full h-full  shadow-custom rounded-xl">
              <div className="flex items-center text-xl text-white font-medium px-6 py-3.5 w-full  bg-main-blue-300 rounded-t-xl">
                상점
              </div>
              <div className="flex flex-col px-4 py-3.5 text-sm justify-between gap-y-2 ">
                <h4 className="">구매 요청</h4>
                <div className="flex justify-between items-center bg-gray-200 rounded-xl px-2 py-1">
                  <div className="flex items-center gap-x-2">
                    <img src={defaultChildBoyImage} alt="" className="w-7 h-7 object-contain" />
                    <div className="">자녀1 님의 구매 요청</div>
                  </div>
                  <div className="">승인</div>
                </div>
                <div className="flex justify-between items-center bg-gray-200 rounded-xl px-2 py-1">
                  <div className="flex items-center gap-x-2">
                    <img src={defaultChildBoyImage} alt="" className="w-7 h-7 object-contain" />
                    <div className="">자녀1 님의 구매 요청</div>
                  </div>
                  <div className="">승인</div>
                </div>

                {/* <h4 className="">최근 소비</h4> */}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-2 h-full">
              <div className="px-2 py-1 bg-[#F2FBFF] shadow-custom-2 rounded-full text-xs flex items-center justify-center">
                등록
              </div>
              <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-100 shadow-custom-2 rounded-full">
                <img src={broccoli} alt="" className="w-3/4 h-3/4 object-contain" />
              </div>
              <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-100 shadow-custom-2 rounded-full">
                <img src={donuts} alt="" className="w-3/4 h-3/4 object-contain" />
              </div>
              <div className="flex items-center justify-center w-14 h-14 bg-white border border-gray-100 shadow-custom-2 rounded-full">
                <img src={icecream} alt="" className="w-3/4 h-3/4 object-contain" />
              </div>
            </div>
          </div>
          {/* 차트 카드 */}
          <section className="py-2">
            {/* 차트 섹션 - 자녀별 점수 비교 */}
            <div className="rounded-2xl shadow-lg bg-white p-4 w-full max-w-md mx-auto">
              {/* 제목 */}
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-bold">모의투자 게임 자녀 분석</h4>
                <img src={rightArrow} alt="" className="w-4 h-4 object-contain" />
              </div>
              {/* 자녀 선택 탭 */}
              <div className="flex justify-between mb-4 bg-gray-100 rounded-xl p-1">
                {["자녀 1", "자녀 2"].map((child) => (
                  <button
                    key={child}
                    className={`flex-1 py-1 rounded-xl text-sm font-semibold transition ${
                      selectedChild === child ? "bg-white shadow text-green-600" : "text-gray-400"
                    }`}
                    onClick={() => setSelectedChild(child)}
                  >
                    {child}
                  </button>
                ))}
              </div>

              {/* 그래프 영역 */}
              <div className="h-72 flex items-end">
                <ResponsiveContainer className="w-full h-full ">
                  <BarChart data={childrenData} barCategoryGap={20}>
                    {/* 그리드 라인 - 수평선만 표시 */}
                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E7EB" />

                    {/* X축 - 성향 유형 */}
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#A3A3A3", fontSize: 14 }} />

                    {/* Y축 - 점수 범위 (0-20, 2단위) */}
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#A3A3A3", fontSize: 14 }}
                      domain={[0, 24]}
                      tickCount={7}
                      width={30}
                      padding={{ top: 0, bottom: 0 }}
                    />

                    {/* 막대 그래프 */}
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {/* 최고 점수 표시 */}
                      {/* prettier-ignore */}
                      <LabelList
                        dataKey="value"
                        position="top"
                        content={({ x, y, value, index }: LabelListProps) =>
                          index === maxScoreIndex ? (
                            <g>
                              {/* 점수 표시 배경 - 초록색 */}
                              <rect
                                x={Number(x) + 36}
                                y={Number(y) - 36}
                                rx={10}
                                width={36}
                                height={28}
                                fill={BarColor[maxScoreIndex]}
                              />
                              {/* 점수 텍스트 - 흰색 */}
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
                      {/* 막대 색상 - 최고 점수는 초록색, 나머지는 회색 */}
                      {childrenData.map((entry: { name: string; value: number }, idx: number) => (
                        <Cell key={`cell-${idx}`} fill={BarColor[idx]} />
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
