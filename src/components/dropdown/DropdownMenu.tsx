import React from "react";

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, onEdit, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-8 -right-2 flex flex-col gap-y-1 px-2 py-2 bg-white rounded-sm shadow-sm">
      <button
        onClick={() => {
          onEdit();
          onClose();
        }}
        className="text-black text-xs whitespace-nowrap hover:bg-gray-100 px-1 py-0.5 rounded"
      >
        수정
      </button>
      <button
        onClick={() => {
          onDelete();
          onClose();
        }}
        className="text-black text-xs whitespace-nowrap hover:bg-gray-100 px-1 py-0.5 rounded"
      >
        삭제
      </button>
    </div>
  );
};
