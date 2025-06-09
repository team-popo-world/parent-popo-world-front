import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/image/common/back-arrow.png";
import clsx from "clsx";

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
}

export const BackButton = ({ onClick, className = "" }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-13 h-13 rounded-full bg-white shadow-custom-2 border border-gray-50",
        className
      )}
      onClick={onClick ?? (() => navigate(-1))}
    >
      <img src={backIcon} alt="back icon" className="w-1/2 h-1/2 object-contain" />
    </div>
  );
};
