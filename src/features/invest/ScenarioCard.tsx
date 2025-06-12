import { EditIcon } from "../../components/icons/EditIcon";
import { DropdownMenu } from "./DropdownMenu";

export const ScenarioCard = ({
  name,
  buttonColor,
  handleDropdownToggle,
  handleEdit,
  handleView,
  handleDelete,
  openDropdowns,
}: {
  name: string;
  buttonColor: string;
  handleDropdownToggle: (name: string) => void;
  handleEdit: (name: string) => void;
  handleView: (name: string) => void;
  handleDelete: (name: string) => void;
  openDropdowns: any;
}) => {
  return (
    <div key={name} className="px-6 py-5 border border-gray-100 rounded-xl shadow-md ">
      {/* 시나리오 리스트 제목 */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium">{name}</div>
        <div className="relative">
          <button
            className="text-xs text-white p-1 rounded-sm flex items-center gap-x-1"
            style={{ backgroundColor: buttonColor }}
            onClick={() => handleDropdownToggle(name)}
          >
            <EditIcon />
          </button>
          <DropdownMenu
            isOpen={openDropdowns[name] || false}
            onClose={() => handleDropdownToggle(name)}
            onView={() => handleView(name)}
            onEdit={() => handleEdit(name)}
            onDelete={() => handleDelete(name)}
          />
        </div>
      </div>
      {/* 시나리오 리스트 내용 */}
      <div className="text-xs text-gray-600 mb-4">
        시나리오 내용 요약시나리오 내용 요약시나리오 내용 요약시나리오 내용 요약 시나리오 내용 요약시나리오 내용
      </div>
      {/* 시나리오 태그, 수정, 생성 날짜 */}
      <div className="flex justify-between items-center">
        <div className="flex gap-x-1">
          <div className="text-[0.7rem] bg-gray-100 text-gray-500 p-1 rounded-sm">#태그</div>
          <div className="text-[0.7rem] bg-gray-100 text-gray-500 p-1 rounded-sm">#태그</div>
        </div>
        <div className="text-[0.7rem] text-gray-500">2025.05.20</div>
      </div>
    </div>
  );
};
