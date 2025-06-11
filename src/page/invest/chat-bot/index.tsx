import theacher_popo from "../../../assets/image/common/teacher_popo.png";
import parents from "../../../assets/image/common/parents.png";
import green_up_arrow from "../../../assets/image/common/green_up_arrow.png";
import { useState } from "react";
import clsx from "clsx";
import { Modal } from "../../../components/modal/Modal";
import { SideModal } from "../../../components/modal/SideModal";
import arrow_right from "../../../assets/image/common/arrow-right.png";
import arrow_down from "../../../assets/image/common/arrow-down.png";

const colors = ["#1DB3FB", "#78D335", "#C57CF0", "#FE4A4E", "#FFBE00", "#FEE0DF"];
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

const scenarioNames = {
  "아기돼지 삼형제": ["아기돼지1", "아기돼지2", "아기돼지3"],
  "푸드 트럭 왕국": ["푸드트럭1", "푸드트럭2", "푸드트럭3"],
  "마법 왕국": ["마법왕국1", "마법왕국2", "마법왕국3"],
  "달빛 도둑": ["달빛도둑1", "달빛도둑2", "달빛도둑3"],
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

export const InvestChatBotPage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof scenarioNames>(
    themes["아기돼지 삼형제"].name as keyof typeof scenarioNames
  );
  const [selectedScenario, setSelectedScenario] = useState<string>(
    scenarioNames[selectedTheme as keyof typeof scenarioNames][0]
  );

  const [senarioCreateModalOpen, setSenarioCreateModalOpen] = useState(false);
  const [senarioModalOpen, setSenarioModalOpen] = useState(false);
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
      {/* 시나리오 종류 */}
      <Modal isOpen={senarioCreateModalOpen} onClose={() => setSenarioCreateModalOpen(false)}>
        <div className="flex flex-col gap-y-4 bg-white rounded-lg p-6 w-[320px]" onClick={(e) => e.stopPropagation()}>
          <div className="text-lg font-medium">시나리오 생성</div>

          <div className="flex flex-col gap-y-2">
            <div className="text-sm text-gray-600">시나리오 종류</div>
            <div className="px-3 py-2 bg-gray-100 rounded text-sm">{selectedTheme}</div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="text-sm text-gray-600">시나리오 이름</div>
            <input
              type="text"
              placeholder="시나리오 이름을 입력하세요"
              className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="flex gap-x-2 mt-2">
            <button
              onClick={() => {
                // TODO: 시나리오 생성 로직
                setSenarioCreateModalOpen(false);
              }}
              className="flex-1 px-4 py-2 text-sm text-white bg-gray-900 rounded hover:bg-gray-800"
            >
              생성
            </button>
            <button
              onClick={() => setSenarioCreateModalOpen(false)}
              className="flex-1 px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
            >
              취소
            </button>
          </div>
        </div>
      </Modal>
      <SideModal isOpen={senarioModalOpen} onClose={() => setSenarioModalOpen(false)}>
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
            style={{ backgroundColor: themes[selectedTheme].color, color: "#fff" }}
          >
            {themes[selectedTheme].name}
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
      </SideModal>
      <div className="text-sm mb-2">시나리오 종류</div>
      <div className="flex gap-x-3.5 pb-2 mb-6  overflow-x-auto scrollbar-hidden">
        {Object.values(themes).map((theme) => (
          <div
            key={theme.id}
            className="px-2 py-1 text-main-white-500 rounded-sm text-xs whitespace-nowrap"
            style={{ backgroundColor: theme.color }}
            onClick={() => {
              setSelectedTheme(theme.name as keyof typeof scenarioNames);
              setSelectedScenario(scenarioNames[theme.name as keyof typeof scenarioNames][0]);
            }}
          >
            {theme.name}
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-2">
        <div className="text-sm">시나리오</div>
        <div
          className="text-xs px-2 py-1 rounded-sm bg-gray-900 text-main-white-500"
          onClick={() => setSenarioCreateModalOpen(true)}
        >
          시나리오 생성
        </div>
      </div>
      <div className="flex gap-x-3.5 pb-2 mb-6  overflow-x-auto scrollbar-hidden">
        {scenarioNames[selectedTheme as keyof typeof scenarioNames].map((name) => (
          <div
            key={name}
            className={clsx(
              "px-2 py-1 rounded-sm text-xs whitespace-nowrap",
              selectedScenario === name ? "bg-gray-900 text-main-white-500" : "bg-gray-100 text-gray-500"
            )}
            onClick={() => setSelectedScenario(name)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-6">
        <div className="text-sm">시나리오 챗봇</div>
        <div
          className="text-xs px-2 py-1 rounded-sm bg-gray-900 text-main-white-500"
          onClick={() => setSenarioModalOpen(true)}
        >
          시나리오 정보
        </div>
      </div>
      {/* 채팅 리스트 */}
      <div className="flex flex-col gap-y-2 overflow-y-auto h-60">
        <div className="flex ">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
            <img src={theacher_popo} alt={"포포 교수님"} className="w-4/5 h-4/5 object-contain" />
          </div>
          <div className="text-xs py-2.5 px-2">포포 교수님</div>
        </div>
        <div className="bg-[#FAF8F9] rounded-lg text-xs p-2 ml-12 mr-2">
          채팅 내용 채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
          내용채팅 내용
        </div>

        <div className="flex self-end ">
          <div className="text-xs py-2.5 px-2">부모님</div>
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
            <img src={parents} alt={"부모님"} className="w-3/4 h-3/4 object-contain" />
          </div>
        </div>
        <div className="bg-[#FAF8F9] rounded-lg text-xs p-2 ml-12 mr-2">
          채팅 내용 채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
          내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용 채팅 내용 채팅 내용채팅 내용채팅
          내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
          내용채팅 내용채팅 내용채팅 내용채팅 내용 채팅 내용 채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
          내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
          내용
        </div>

        <div className="flex self-end ">
          <div className="text-xs py-2.5 px-2">부모님</div>
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
            <img src={parents} alt={"부모님"} className="w-3/4 h-3/4 object-contain" />
          </div>
        </div>
        <div className="bg-[#FAF8F9] rounded-lg text-xs p-2 ml-12 mr-2">
          채팅 내용 채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
          내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용 채팅 내용 채팅 내용채팅 내용채팅
          내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
        </div>
      </div>
      {/* 채팅 입력 */}
      <div className="absolute flex flex-col-reverse bottom-6 left-8 w-[calc(100%-4rem)]  px-4 pt-4 pb-12 bg-main-white-500 rounded-xl shadow-custom-2 border border-gray-100 ">
        <div className=" overflow-y-auto focus:outline-none" contentEditable></div>
        <img src={green_up_arrow} alt={"화살표"} className="absolute bottom-4 right-4  w-8 h-8 object-contain" />
      </div>
    </>
  );
};
