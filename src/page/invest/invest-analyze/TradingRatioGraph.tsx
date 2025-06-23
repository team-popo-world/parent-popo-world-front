// 구매 판매 비율 그래프
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
export default function TradingRatioGraph() {
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
}
