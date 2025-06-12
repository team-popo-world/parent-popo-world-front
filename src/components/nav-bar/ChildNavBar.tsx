interface ChildNavBarProps {
  selectedColor: string;
  selectedChild: string;
  setSelectedChild: (child: string) => void;
}

export const ChildNavBar: React.FC<ChildNavBarProps> = ({ selectedColor, selectedChild, setSelectedChild }) => {
  return (
    <div className="flex justify-between mb-8  bg-gray-100 rounded-xl p-1">
      {["자녀 1", "자녀 2"].map((child) => (
        <button
          key={child}
          className={`flex-1 py-1 rounded-xl text-sm font-semibold transition ${
            selectedChild === child ? "bg-white shadow " : ""
          }`}
          style={{
            color: selectedChild === child ? `${selectedColor}` : "#99a1af",
          }}
          onClick={() => setSelectedChild(child)}
        >
          {child}
        </button>
      ))}
    </div>
  );
};
