// 배팅 성공률 그래프
import { LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Line } from "recharts";
import { type BettingSuccessGraphProps } from "./types";

export default function BettingSuccessGraph({
  BettingSuccessData,
}: {
  BettingSuccessData: BettingSuccessGraphProps[];
}) {
  console.log("BettingSuccessData", BettingSuccessData);
  return (
    <div className="w-[calc(100%_+_1rem)] h-80 -ml-4 text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={BettingSuccessData} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="gameId" />
          <YAxis label={{ value: "성공률 (%)", position: "top", angle: 0, offset: 15, dx: 20 }} domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="buySuccess" name="구매 배팅" stroke="#78D335" strokeWidth={2} dot={{ r: 4 }} />
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
}
