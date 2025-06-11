import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  width?: string;
  children: ReactNode;
}

export const SideModal = ({ isOpen, onClose, children }: SideModalProps) => {
  const [isOpenTransition, setIsOpenTransition] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsOpenTransition(true);
      setIsClosed(false);
    } else {
      setIsOpenTransition(false);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpenTransition && !isOpen) {
      setIsClosed(true);
    }
  };

  if (!isOpen && isClosed) return null;

  return (
    <div className={clsx("absolute inset-0 z-50 ", isOpen ? "bg-black/50" : "bg-transparent")} onClick={onClose}>
      <div
        className="relative w-[21rem] h-full ml-auto bg-white shadow-xl flex flex-col transition-transform duration-500 overflow-y-auto scrollbar-hidden"
        style={{
          transform: isOpenTransition ? "translateX(0)" : "translateX(100%)",
        }}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Content */}
        {children}
      </div>
    </div>
  );
};
