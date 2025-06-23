import { useState } from "react";
// import clsx from "clsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import DwellTimeGraph from "./DwellTimeGraph";
import TradingRatioGraph from "./TradingRatioGraph";
import BettingSuccessGraph from "./BettingSuccessGraph";
import BalanceTrendGraph from "./BalanceTrendGraph";

export const investTypes: Record<string, { title: string; color: string }> = {
  dwellTime: {
    title: "평균 턴 체류시간",
    color: "#1DB3FB",
  },
  tradingRatio: {
    title: "구매 판매 비율",
    color: "#78D335",
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
// YAxis
// label: {
// label: {
//   value: string;          // 레이블 텍스트
//   position: string;       // 위치 ("top" | "bottom" | "left" | "right" | "center")
//   angle: number;         // 회전 각도
//   offset: number;        // 수직 방향 오프셋 (위/아래)
//   dx: number;           // 수평 방향 오프셋 (좌/우)
//   dy: number;           // 추가 수직 오프셋
//   style: object;        // 스타일 객체
// }
// }

export const InvestAnalyzePage: React.FC = () => {
  const [selectedAnalyzeType, setSelectedAnalyzeType] = useState<string>("dwellTime");
  const [selectedAnalyzePeriod, setSelectedAnalyzePeriod] = useState<"monthly" | "weekly">("monthly");

  const AnalyzeGraph = () => {
    if (selectedAnalyzeType === "dwellTime") {
      // 체류시간
      return <DwellTimeGraph />;
    } else if (selectedAnalyzeType === "tradingRatio") {
      // 구매 판매 비율
      return <TradingRatioGraph />;
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

      {/* 체류시간 분석 그래프 */}
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

      {/* 체류시간 분석 그래프 */}

      {/* 막대 그래프 종목별 구매 판매 비율 고위험, 중위험, 저위험 막대 3개 각 막대마다 구매판매비율 표시 */}

      {/* 꺾은선 그래프 배팅 성공률 구매 배팅, 판매 배팅, y축 성공률 x 축 게임 id */}

      {/* 꺾은선 그래프 y축 여유자금, x축 게임 id, */}
      {AnalyzeGraph()}

      {/* 아래 선 부모 패딩 좌 2rem, 우 2rem 계산후 반영 */}
      <div className="my-6 -ml-8 w-[calc(100%_+_4rem)] h-[0.0625rem] bg-gray-200 " />

      {/* 분석 결과 */}
      <div className="text-sm font-bold mb-2">분석 결과</div>
      <div className="text-xs">분석결과 현재 자녀는 매우 공격적입니다. 분석결과 현재 자녀는 매우 공격적입니다.</div>
    </>
  );
};
