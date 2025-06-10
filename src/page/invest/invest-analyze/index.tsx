const colors = ["#1DB3FB", "#78D335", "#C57CF0", "#FE4A4E", "#FFBE00", "#FEE0DF"];

export const InvestAnalyzePage: React.FC = () => {
  return (
    <>
      {/* 분석 종류 */}
      <div className="text-sm mb-2">분석 종류</div>
      <div className="flex gap-x-3.5 pb-2 mb-6  overflow-x-auto scrollbar-hidden">
        {colors.map((color, index) => (
          <div
            key={index}
            className="px-2 py-1 text-main-white-500 rounded-sm text-xs whitespace-nowrap"
            style={{ backgroundColor: color }}
          >
            투자 성향
          </div>
        ))}
      </div>

      {/* 투자 성향 그래프 */}
    </>
  );
};
