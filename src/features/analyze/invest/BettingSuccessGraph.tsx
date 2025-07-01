// 배팅 성공률 그래프
import { LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, ReferenceLine } from "recharts";
import { type BettingSuccessGraphProps } from "./types";
import { useRef, useState, useEffect } from "react";
import LegendIcon from "../../../components/icons/Legend";

export default function BettingSuccessGraph({
  BettingSuccessData,
}: {
  BettingSuccessData: BettingSuccessGraphProps[];
}) {
  const processedData = BettingSuccessData.map((item, index) => ({
    gameId: index + 1,
    betBuyRatio: item.betBuyRatio * 100,
    betSellRatio: item.betSellRatio * 100,
  }));
  const betBuyRatioMean = BettingSuccessData[0].betBuyRatioMean * 100;
  const betSellRatioMean = BettingSuccessData[0].betSellRatioMean * 100;

  // 데이터 개수에 따른 너비 계산 함수
  const getWidthClass = (dataLength: number) => {
    return `${dataLength > 50 ? 100 + dataLength * 1 : 100}%`;
  };

  const getContainerWidth = (dataLength: number) => {
    return dataLength > 50 ? "calc(100% + 3.5rem)" : "calc(100% + 3rem)";
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [legendOffset, setLegendOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        setLegendOffset(scrollLeft);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  console.log("BettingSuccessData", BettingSuccessData);
  return (
    <div
      className="h-[24rem] -ml-9 text-xs overflow-x-auto scrollbar-hidden"
      style={{ width: getContainerWidth(processedData.length) }}
      ref={scrollContainerRef}
    >
      <div className={`relative`} style={{ width: getWidthClass(processedData.length), height: "100%" }}>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={processedData} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="gameId"
              label={{
                value: "게임 수",
                position: "right",
                offset: -30,
                dy: 8,
                dx: 2,
              }}
              ticks={(() => {
                const length = processedData.length;
                if (length <= 5) return undefined; // 5개 이하면 모든 눈금 표시
                if (length <= 50) return [1, Math.ceil(length / 2), length]; // 50개 이하면 3개
                if (length <= 100) return [1, Math.ceil(length / 3), Math.ceil((length * 2) / 3), length]; // 100개 이하면 4개
                return [1, Math.ceil(length / 4), Math.ceil(length / 2), Math.ceil((length * 3) / 4), length]; // 100개 초과면 5개
              })()}
            />
            <YAxis label={{ value: "성공률 (%)", position: "top", angle: 0, offset: 15, dx: 20 }} domain={[0, 100]} />
            <Tooltip formatter={(value: number) => `${Math.round(value)}%`} />
            <ReferenceLine
              y={betBuyRatioMean}
              stroke="#1DB3FB"
              strokeDasharray="3 3"
              label={{ value: "", position: "left", offset: 10, dx: 5 }}
            />
            <ReferenceLine
              y={betSellRatioMean}
              stroke="#78D335"
              strokeDasharray="3 3"
              label={{ value: "", position: "left", offset: 10, dx: 5 }}
            />
            <Line
              type="monotone"
              dataKey="betBuyRatio"
              name="구매 배팅 성공률"
              stroke="#78D335"
              strokeWidth={2}
              dot={processedData.length > 10 ? false : true}
            />
            <Line
              type="monotone"
              dataKey="betSellRatio"
              name="판매 배팅 성공률"
              stroke="#1DB3FB"
              strokeWidth={2}
              dot={processedData.length > 10 ? false : true}
            />
          </LineChart>
        </ResponsiveContainer>
        {/* 커스텀 Legend - 그래프 아래쪽에 위치 */}
        <div
          className="h-[15%] ml-32 flex flex-col gap-4 text-[0.7rem]"
          style={{ marginLeft: `${legendOffset / 16 + 8}rem` }}
        >
          <div className="flex gap-2">
            <div className="flex items-center whitespace-nowrap">
              <LegendIcon color="#1DB3FB" />
              <span className="text-[#1DB3FB]">구매 배팅 성공률</span>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <LegendIcon color="#78D335" />
              <span className="text-[#78D335]">판매 배팅 성공률</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <div className="text-[#1DB3FB]">---</div>
              <span className="text-[#1DB3FB]">평균 구매 배팅 성공률</span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <div className="text-[#78D335]">---</div>
              <span className="text-[#78D335]">평균 판매 배팅 성공률</span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
