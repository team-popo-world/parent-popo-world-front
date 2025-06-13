import { useState } from "react";
import clsx from "clsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";

const investTypes: Record<string, { title: string; color: string }> = {
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

// 더미 데이터
const DwellTimeDummyData = [
  { gameId: "1", overallDwellTime: 120, tagDwellTime: 90 },
  { gameId: "2", overallDwellTime: 150, tagDwellTime: 110 },
  { gameId: "3", overallDwellTime: 130, tagDwellTime: 100 },
  { gameId: "4", overallDwellTime: 140, tagDwellTime: 95 },
  { gameId: "5", overallDwellTime: 160, tagDwellTime: 120 },
  { gameId: "6", overallDwellTime: 145, tagDwellTime: 105 },
  { gameId: "7", overallDwellTime: 135, tagDwellTime: 115 },
];

const TradingRatioDummyData = [
  {
    gameId: "1",
    buy: {
      highRisk: 40,
      midRisk: 35,
      lowRisk: 25,
    },
    sell: {
      highRisk: 30,
      midRisk: 40,
      lowRisk: 30,
    },
  },
  {
    gameId: "2",
    buy: {
      highRisk: 45,
      midRisk: 30,
      lowRisk: 25,
    },
    sell: {
      highRisk: 25,
      midRisk: 45,
      lowRisk: 30,
    },
  },
  {
    gameId: "3",
    buy: {
      highRisk: 35,
      midRisk: 40,
      lowRisk: 25,
    },
    sell: {
      highRisk: 35,
      midRisk: 35,
      lowRisk: 30,
    },
  },
  {
    gameId: "4",
    buy: {
      highRisk: 50,
      midRisk: 30,
      lowRisk: 20,
    },
    sell: {
      highRisk: 20,
      midRisk: 50,
      lowRisk: 30,
    },
  },
];

const BettingSuccessDummyData = [
  { gameId: "1", buySuccess: 65, sellSuccess: 45 },
  { gameId: "2", buySuccess: 70, sellSuccess: 57 },
  { gameId: "3", buySuccess: 85, sellSuccess: 65 },
  { gameId: "4", buySuccess: 70, sellSuccess: 50 },
  { gameId: "5", buySuccess: 75, sellSuccess: 64 },
  { gameId: "6", buySuccess: 90, sellSuccess: 70 },
  { gameId: "7", buySuccess: 75, sellSuccess: 58 },
  { gameId: "8", buySuccess: 85, sellSuccess: 65 },
  { gameId: "9", buySuccess: 95, sellSuccess: 75 },
  { gameId: "10", buySuccess: 80, sellSuccess: 60 },
];

// DummyData 배열에 추가
const BalanceTrendDummyData = [
  { gameId: "1", balance: 1000 },
  { gameId: "2", balance: 120 },
  { gameId: "3", balance: 300 },
  { gameId: "4", balance: 130 },
  { gameId: "5", balance: 600 },
  { gameId: "6", balance: 140 },
  { gameId: "7", balance: 700 },
  { gameId: "8", balance: 150 },
  { gameId: "9", balance: 200 },
  { gameId: "10", balance: 160 },
];

export const InvestAnalyzePage: React.FC = () => {
  const [selectedAnalyzeType, setSelectedAnalyzeType] = useState<keyof typeof investTypes>("dwellTime");
  const [selectedAnalyzePeriod, setSelectedAnalyzePeriod] = useState<"monthly" | "weekly">("monthly");

  const AnalyzeGraph = () => {
    if (selectedAnalyzeType === "dwellTime") {
      return (
        <div className="w-[calc(100%_+_1rem)] h-80 -ml-4 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DwellTimeDummyData} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="gameId" />
              <YAxis label={{ value: "단위 (분)", position: "top", angle: 0, offset: 15, dx: 20 }} />
              <Tooltip />
              <Legend />
              {/* 평균 라인 추가 */}
              <ReferenceLine
                y={DwellTimeDummyData.reduce((acc, curr) => acc + curr.overallDwellTime, 0) / DwellTimeDummyData.length}
                stroke="#666"
                strokeDasharray="3 3"
                label={{ value: "평균", position: "left", offset: 10, dx: 5 }}
              />
              <Line
                type="monotone"
                dataKey="overallDwellTime"
                name="전체 평균 체류시간"
                stroke="#1DB3FB"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="tagDwellTime"
                name="태그별 평균 체류시간"
                stroke="#78D335"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (selectedAnalyzeType === "tradingRatio") {
      return (
        <div className="w-[calc(100%_+_1rem)] h-80 -ml-4 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={TradingRatioDummyData} margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
              <XAxis dataKey="gameId" />
              <YAxis label={{ value: "비율 (%)", position: "top", angle: 0, offset: 15, dx: 20 }} domain={[0, 100]} />
              <Tooltip />
              <Legend
                payload={[
                  { value: "고위험", type: "rect", color: "#78D335" },
                  { value: "중위험", type: "rect", color: "#1DB3FB" },
                  { value: "저위험", type: "rect", color: "#C57CF0" },
                ]}
              />
              <Bar dataKey="buy.highRisk" name="구매-고위험" stackId="buy" fill="#78D335" radius={[4, 4, 0, 0]} />
              <Bar dataKey="buy.midRisk" name="구매-중위험" stackId="buy" fill="#1DB3FB" radius={[4, 4, 0, 0]} />
              <Bar dataKey="buy.lowRisk" name="구매-저위험" stackId="buy" fill="#C57CF0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sell.highRisk" name="판매-고위험" stackId="sell" fill="#78D335" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sell.midRisk" name="판매-중위험" stackId="sell" fill="#1DB3FB" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sell.lowRisk" name="판매-저위험" stackId="sell" fill="#C57CF0" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (selectedAnalyzeType === "bettingSuccess") {
      return (
        <div className="w-[calc(100%_+_1rem)] h-80 -ml-4 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={BettingSuccessDummyData} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="gameId" />
              <YAxis label={{ value: "성공률 (%)", position: "top", angle: 0, offset: 15, dx: 20 }} domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="buySuccess"
                name="구매 배팅"
                stroke="#78D335"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="sellSuccess"
                name="판매 배팅"
                stroke="#1DB3FB"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    } else if (selectedAnalyzeType === "balanceTrend") {
      return (
        <div className="w-[calc(100%_+_1rem)] h-80 -ml-4 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={BalanceTrendDummyData} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="gameId" />
              <YAxis label={{ value: "여유자금 (냥)", position: "top", angle: 0, offset: 15, dx: 20 }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="balance"
                name="여유자금"
                stroke={investTypes[selectedAnalyzeType].color}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
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
