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
      <div className="flex flex-col px-6 pt-4 pb-3 border-b border-gray-100">
        <div className="flex justify-between ">
          <div className="text-base font-semibold">{scenarioName}</div>
          <button onClick={() => setSenarioModalOpen(false)} aria-label="닫기" className="text-lg font-bold text-black">
            &times;
          </button>
        </div>
        <div className="flex gap-x-1">
          <div className="text-xs text-gray-500">#태그</div>
          <div className="text-xs text-gray-500">#태그</div>
        </div>
      </div>

      {/* 시나리오 종류/태그 */}
      <div className="flex gap-x-2 px-6 py-4">
        <span
          className="px-2 py-1 rounded text-xs font-medium"
          style={{ backgroundColor: scenarioColor, color: "#fff" }}
        >
          {selectedTheme}
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
      <div
        className="w-fit mt-auto ml-auto bg-black text-sm text-white px-2 py-1 mb-8 mr-8 rounded-lg"
        onClick={quitButtonOnClick}
      >
        저장하고 나가기
      </div>
    </>
  );
}
