import plusIcon from "@/assets/image/common/add-icon.png";
import clsx from "clsx";

interface AddButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const AddButton: React.FC<AddButtonProps> = ({ text, onClick, className }) => {
  return (
    <div
      className={clsx(
        "flex py-5.5 w-full mb-10 bg-main-white-500 justify-center items-center border-2 border-gray-100 text-lg shadow-custom-2 rounded-xl active:scale-95 transition-all duration-100",
        className
      )}
      onClick={onClick}
    >
      {text}
      <img src={plusIcon} alt="plus icon" className="w-7 h-7 ml-1" />
    </div>
  );
};
