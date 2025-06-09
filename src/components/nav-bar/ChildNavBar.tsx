interface ChildNavBarProps {
  selectedChild: string;
  setSelectedChild: (child: string) => void;
}

export const ChildNavBar: React.FC<ChildNavBarProps> = ({ selectedChild, setSelectedChild }) => {
  return (
    <div className="flex justify-between mb-8 bg-gray-100 rounded-xl p-1">
      {["자녀 1", "자녀 2"].map((child) => (
        <button
          key={child}
          className={`flex-1 py-1 rounded-xl text-sm font-semibold transition ${
            selectedChild === child ? "bg-white shadow text-green-600" : "text-gray-400"
          }`}
          onClick={() => setSelectedChild(child)}
        >
          {child}
        </button>
      ))}
    </div>
  );
};
