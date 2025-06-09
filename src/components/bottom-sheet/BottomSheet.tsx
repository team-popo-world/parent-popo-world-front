import React from "react";
import clsx from "clsx";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      {/* Bottom Sheet */}
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 transition-transform duration-300 ease-in-out",
          "max-w-md mx-auto",
          className
        )}
      >
        {/* Handle */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto my-3" />
        {/* Content */}
        <div className="px-8 pt-3 pb-8 ">{children}</div>
      </div>
    </>
  );
};
