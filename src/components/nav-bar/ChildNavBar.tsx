import { useAuthStore } from "../../zustand/auth";

interface ChildNavBarProps {
  selectedColor: string;
}

export const ChildNavBar: React.FC<ChildNavBarProps> = ({ selectedColor }) => {
  const { child, selectedChildId, setSelectedChildId } = useAuthStore();

  return (
    <div className="flex justify-between gap-x-1 mb-8 bg-gray-100 rounded-xl p-1 overflow-x-auto scrollbar-hidden">
      {child.length > 0 &&
        child.map((_child) => (
          <button
            key={_child.userId}
            className={`flex-1 py-1 px-2 rounded-xl text-sm font-semibold transition ${
              selectedChildId === _child.userId ? "bg-white shadow " : ""
            }`}
            style={{
              color: selectedChildId === _child.userId ? `${selectedColor}` : "#99a1af",
            }}
            onClick={() => setSelectedChildId(_child.userId)}
          >
            {_child.name}
          </button>
        ))}
    </div>
  );
};
