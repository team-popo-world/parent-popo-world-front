import theacher_popo from "../../../assets/image/common/teacher_popo.png";
import parents from "../../../assets/image/common/parents.png";
import green_up_arrow from "../../../assets/image/common/green_up_arrow.png";
const colors = ["#1DB3FB", "#78D335", "#C57CF0", "#FE4A4E", "#FFBE00", "#FEE0DF"];
const themes = [
  {
    id: 1,
    name: "아기돼지 삼형제",
    color: "#1DB3FB",
  },
  {
    id: 2,
    name: "푸드 트럭 왕국",
    color: "#78D335",
  },
  {
    id: 3,
    name: "마법 왕국",
    color: "#C57CF0",
  },
  {
    id: 4,
    name: "달빛 도둑",
    color: "#FE4A4E",
  },
];

export const InvestChatBotPage: React.FC = () => {
  return (
    <>
      {/* 분석 종류 */}
      <div className="text-sm mb-2">분석 종류</div>
      <div className="flex gap-x-3.5 pb-2 mb-6  overflow-x-auto scrollbar-hidden">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="px-2 py-1 text-main-white-500 rounded-sm text-xs whitespace-nowrap"
            style={{ backgroundColor: theme.color }}
          >
            {theme.name}
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-6">
        <div className="text-sm">시나리오 생성</div>
        <div className="text-sm">시나리오 정보</div>
      </div>
      {/* 채팅 리스트 */}
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
        <img src={theacher_popo} alt={"포포 교수님"} className="w-4/5 h-4/5 object-contain" />
      </div>
      <div className=""></div>
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
        <img src={parents} alt={"부모님"} className="w-3/4 h-3/4 object-contain" />
      </div>
      <div className="relative w-full h-20 p-4 bg-main-white-500 rounded-xl shadow-custom-2 border border-gray-100">
        <img src={green_up_arrow} alt={"화살표"} className="absolute bottom-1 right-1  w-8 h-8 object-contain" />
      </div>
    </>
  );
};
