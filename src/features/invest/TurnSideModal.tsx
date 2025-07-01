import { useState } from "react";
import arrow_down from "../../assets/image/common/arrow-down.png";
import arrow_right from "../../assets/image/common/arrow-right.png";
import type { TurnState } from "../../page/invest/scenario-select/ChatBot";

export function TurnSideModal({
  turns,
  scenarioColor,
  selectedTheme,
  scenarioName,
  setSenarioModalOpen,
}: {
  turns: TurnState[];
  scenarioColor: string;
  selectedTheme: string;
  scenarioName: string;
  setSenarioModalOpen: (open: boolean) => void;
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
      </div>

      {/* 시나리오 종류/태그 */}
      <div className="flex gap-x-2 px-6 py-4">
        <span
          className="px-2 py-1 rounded text-sm font-medium"
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
              <span>{turn.title}턴 </span>
              <span className="text-lg">
                {openTurn[turn.title] ? (
                  <img src={arrow_down} alt="arrow_down" className="w-4 h-4 object-contain" />
                ) : (
                  <img src={arrow_right} alt="arrow_right" className="w-4 h-4 object-contain" />
                )}
              </span>
            </button>
            {openTurn[turn.title] && (
              <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg px-4 py-3 mt-[-1px] text-sm text-gray-700">
                <div className="mb-2">
                  <span className="font-medium text-gray-600">{turn.title === "1" ? "🚀 시작: " : "📌 결과:"}</span>{" "}
                  {turn.result}
                </div>
                {turn.news && (
                  <div>
                    <span className="font-medium text-gray-600">📰 뉴스:</span> {turn.news}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
