import arrow_down from "../../assets/image/common/arrow-down.png";
import arrow_right from "../../assets/image/common/arrow-right.png";

const themes = {
  "아기돼지 삼형제": {
    id: 1,
    name: "아기돼지 삼형제",
    color: "#1DB3FB",
  },
  "푸드 트럭 왕국": {
    id: 2,
    name: "푸드 트럭 왕국",
    color: "#78D335",
  },
  "마법 왕국": {
    id: 3,
    name: "마법 왕국",
    color: "#C57CF0",
  },
  "달빛 도둑": {
    id: 4,
    name: "달빛 도둑",
    color: "#FE4A4E",
  },
};
const turns = [
  {
    title: "1턴",
    content:
      "1턴의 상세 내용입니다. 1턴의 상세 내용입니다.1턴의 상세 내용입니다.1턴의 상세 내용입니다.1턴의 상세 내용입니다.1턴의 상세 내용입니다.1턴의 상세 내용입니다.",
  },
  { title: "2턴", content: "2턴의 상세 내용입니다." },
  { title: "3턴", content: "3턴의 상세 내용입니다." },
  { title: "4턴", content: "4턴의 상세 내용입니다." },
  { title: "5턴", content: "5턴의 상세 내용입니다." },
  { title: "6턴", content: "6턴의 상세 내용입니다." },
  { title: "7턴", content: "7턴의 상세 내용입니다." },
  { title: "8턴", content: "8턴의 상세 내용입니다." },
  { title: "9턴", content: "9턴의 상세 내용입니다." },
  { title: "10턴", content: "10턴의 상세 내용입니다." },
];

const scenarioNames = {
  "아기돼지 삼형제": ["아기돼지1", "아기돼지2", "아기돼지3"],
  "푸드 트럭 왕국": ["푸드트럭1", "푸드트럭2", "푸드트럭3"],
  "마법 왕국": ["마법왕국1", "마법왕국2", "마법왕국3"],
  "달빛 도둑": ["달빛도둑1", "달빛도둑2", "달빛도둑3"],
};

export const TurnSideModal = ({
  selectedTheme,
  setSenarioModalOpen,
  openTurn,
  setOpenTurn,
}: {
  selectedTheme: string;
  setSenarioModalOpen: (open: boolean) => void;
  openTurn: { [key: string]: boolean };
  setOpenTurn: (openTurn: { [key: string]: boolean }) => void;
}) => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="text-base font-semibold">시나리오 정보</div>
        <button
          onClick={() => setSenarioModalOpen(false)}
          aria-label="닫기"
          className="text-2xl text-gray-400 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
      {/* 시나리오 종류/태그 */}
      <div className="flex gap-x-2 px-6 py-4">
        <span
          className="px-2 py-1 rounded text-xs font-medium"
          style={{ backgroundColor: themes[selectedTheme as keyof typeof themes].color, color: "#fff" }}
        >
          {themes[selectedTheme as keyof typeof themes].name}
        </span>
        <span className="px-2 py-1 rounded text-xs font-medium bg-gray-900 text-main-white-500">
          {scenarioNames[selectedTheme as keyof typeof scenarioNames][0]}
        </span>
      </div>

      {/* 턴 정보 */}
      <div className="px-6 pb-6">
        {turns.map((turn, idx) => (
          <div key={idx} className="mb-2">
            <button
              className="w-full flex justify-between items-center px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm font-medium"
              onClick={() => setOpenTurn({ ...openTurn, [turn.title]: !openTurn[turn.title] })}
            >
              <span>{turn.title}</span>
              <span className="text-lg">
                {openTurn[turn.title] ? (
                  <img src={arrow_down} alt="arrow_down" className="w-4 h-4 object-contain" />
                ) : (
                  <img src={arrow_right} alt="arrow_right" className="w-4 h-4 object-contain" />
                )}
              </span>
            </button>
            {openTurn[turn.title] && (
              <div className="bg-gray-50 border border-gray-200 rounded-b px-3 py-2 text-xs text-gray-700">
                {turn.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
