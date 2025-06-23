import { useState } from "react";
// import clsx from "clsx";
import StayTimeGraph from "./StayTimeGraph";
import TradingRatioGraph1 from "./TradingRatioGraph1";
import TradingRatioGraph2 from "./TradingRatioGraph2";
import TradingRatioGraph3 from "./TradingRatioGraph3";
import BettingSuccessGraph from "./BettingSuccessGraph";
import BalanceTrendGraph from "./BalanceTrendGraph";

export const investTypes: Record<string, { title: string; color: string }> = {
  dwellTime: {
    title: "평균 턴 체류시간",
    color: "#1DB3FB",
  },
  tradingRatio1: {
    title: "구매 비율",
    color: "#78D335",
  },
  tradingRatio2: {
    title: "판매 비율",
    color: "#FF9600",
  },
  tradingRatio3: {
    title: "구매 판매 비율",
    color: "#4D4B4D",
  },
  bettingSuccess: {
    title: "배팅 성공률",
    color: "#C57CF0",
  },
  balanceTrend: {
    title: "여유자금 추이",
    color: "#FE4A4E",
  },
  investType: {
    title: "투자 성향",
    color: "#FFBE00",
  },
};

export const InvestAnalyzePage: React.FC = () => {
  const [selectedAnalyzeType, setSelectedAnalyzeType] = useState<string>("tradingRatio1");
  const [selectedAnalyzePeriod, setSelectedAnalyzePeriod] = useState<"monthly" | "weekly">("monthly");

  const AnalyzeGraph = () => {
    if (selectedAnalyzeType === "dwellTime") {
      // 체류시간
      return <StayTimeGraph />;
    } else if (selectedAnalyzeType === "tradingRatio1") {
      // 구매 판매 비율
      return <TradingRatioGraph1 />;
    } else if (selectedAnalyzeType === "tradingRatio2") {
      // 구매 판매 비율
      return <TradingRatioGraph2 />;
    } else if (selectedAnalyzeType === "tradingRatio3") {
      // 구매 판매 비율
      return <TradingRatioGraph3 />;
    } else if (selectedAnalyzeType === "bettingSuccess") {
      // 배팅 성공률
      return <BettingSuccessGraph />;
    } else if (selectedAnalyzeType === "balanceTrend") {
      // 여유자금 추이
      return <BalanceTrendGraph selectedAnalyzeType={selectedAnalyzeType} />;
    } else if (selectedAnalyzeType === "investType") {
      return <div className=""></div>;
    }
  };

  return (
    <>
      {/* 분석 종류 */}
      <div className="text-sm mb-2">분석 종류</div>
      <div className="flex gap-x-3.5 pb-2 mb-6  overflow-x-auto scrollbar-hidden">
        {Object.entries(investTypes).map(([key, investType], index) => (
          <div
            key={index}
            className="px-2 py-1 text-main-white-500 rounded-sm text-xs whitespace-nowrap"
            style={{ backgroundColor: investType.color }}
            onClick={() => setSelectedAnalyzeType(key as keyof typeof investTypes)}
          >
            {investType.title}
          </div>
        ))}
      </div>

      {/* 그래프 설명 영역 */}
      <div className="flex justify-between items-center mb-5">
        <div className="text-sm">{investTypes[selectedAnalyzeType].title}</div>
        <div className="flex justify-between bg-gray-100 rounded-xl p-1">
          {[
            { label: "월간", value: "monthly" as const },
            { label: "주간", value: "weekly" as const },
          ].map((period) => (
            <button
              key={period.value}
              className={`flex-1 py-1 px-3 rounded-lg text-sm font-semibold transition ${
                selectedAnalyzePeriod === period.value ? "bg-white shadow" : ""
              }`}
              style={{
                color: selectedAnalyzePeriod === period.value ? investTypes[selectedAnalyzeType].color : "#99a1af",
              }}
              onClick={() => setSelectedAnalyzePeriod(period.value)}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {AnalyzeGraph()}

      {/* 아래 선 부모 패딩 좌 2rem, 우 2rem 계산후 반영 */}
      <div className="my-6 -ml-8 w-[calc(100%_+_4rem)] h-[0.0625rem] bg-gray-200 " />

      {/* 분석 결과 */}
      <div className="text-sm font-bold mb-2">분석 결과</div>
      <div className="text-xs">분석결과 현재 자녀는 매우 공격적입니다. 분석결과 현재 자녀는 매우 공격적입니다.</div>
    </>
  );
};
