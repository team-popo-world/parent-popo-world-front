import type { ReactNode } from "react";
import { ModalPortal } from "./ModalPortal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 font-SpoqaHanSansNeo"
        onClick={onClose}
      >
        {/* Modal Content */}
        {children}
      </div>
    </ModalPortal>
  );
};
