import { useState } from "react";
import arrow_down from "../../assets/image/common/arrow-down.png";
import arrow_right from "../../assets/image/common/arrow-right.png";

export default function ChatTurnSideModal({
  turns,
  scenarioColor,
  selectedTheme,
  scenarioName,
  setSenarioModalOpen,
  quitButtonOnClick,
}: {
  turns: { title: string; content: string }[];
  scenarioColor: string;
  selectedTheme: string;
  scenarioName: string;
  setSenarioModalOpen: (open: boolean) => void;
  quitButtonOnClick: () => void;
}) {
  const [openTurn, setOpenTurn] = useState<{ [key: string]: boolean }>({
    "1턴": false,
    "2턴": false,
    "3턴": false,
    "4턴": false,
    "5턴": false,
    "6턴": false,
    "7턴": false,
    "8턴": false,
    "9턴": false,
    "10턴": false,
  });
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
          style={{ backgroundColor: scenarioColor, color: "#fff" }}
        >
          {selectedTheme}
        </span>
        <span className="px-2 py-1 rounded text-xs font-medium bg-gray-900 text-main-white-500">{scenarioName}</span>
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
      <div
        className="w-fit mt-auto ml-auto bg-black text-sm text-white px-2 py-1 mb-8 mr-8 rounded-lg"
        onClick={quitButtonOnClick}
      >
        저장하고 나가기
      </div>
    </>
  );
}
