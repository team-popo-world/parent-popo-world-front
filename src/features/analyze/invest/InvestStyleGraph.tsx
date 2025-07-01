import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import type { InvestStyleGraphProps } from "./types";

interface InvestStyleGraphComponentProps {
  InvestStyleData: InvestStyleGraphProps[];
}

const clusterIndexTitle = ["안정추구형", "적극투자형", "위험중립형", "공격투자형", "안정형"];

export const InvestStyleGraph: React.FC<InvestStyleGraphComponentProps> = ({ InvestStyleData }) => {
  // 데이터를 RadarChart에 맞는 형식으로 변환
  const chartData = InvestStyleData.map((item) => ({
    subject: ` ${clusterIndexTitle[item.cluster_num]}`,
    A: item.count,
  }));

  const maxCount = Math.max(...InvestStyleData.map((d) => d.count));

  return (
    <div className="w-[calc(100%_+_1rem)] h-80 -ml-4 text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, maxCount + 5]} />
          <Radar name="게임 수" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
