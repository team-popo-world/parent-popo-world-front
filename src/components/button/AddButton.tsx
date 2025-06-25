import plusIcon from "@/assets/image/common/add-icon.png";

interface AddButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const AddButton: React.FC<AddButtonProps> = ({ text, onClick }) => {
  return (
    <div
      className=" flex py-5 w-full mb-10 bg-white/75 justify-center items-center border-2 border-gray-100 text-[1.05rem] rounded-xl active:scale-95 transition-all duration-100"
      onClick={onClick}
    >
      {text}
      <img src={plusIcon} alt="plus icon" className="w-6.5 h-6.5 ml-1" />
    </div>
  );
};
