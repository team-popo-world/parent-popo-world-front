import React from "react";

interface EditIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const EditIcon: React.FC<EditIconProps> = ({ width = 16, height = 16, color = "white" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.66602 4.66699H3.99935C3.64573 4.66699 3.30659 4.80747 3.05654 5.05752C2.80649 5.30756 2.66602 5.6467 2.66602 6.00033V12.0003C2.66602 12.3539 2.80649 12.6931 3.05654 12.9431C3.30659 13.1932 3.64573 13.3337 3.99935 13.3337H9.99935C10.353 13.3337 10.6921 13.1932 10.9422 12.9431C11.1922 12.6931 11.3327 12.3539 11.3327 12.0003V11.3337"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 3.3334L12.6667 5.3334M13.59 4.39007C13.8526 4.12751 14.0001 3.77139 14.0001 3.40007C14.0001 3.02875 13.8526 2.67264 13.59 2.41007C13.3274 2.14751 12.9713 2 12.6 2C12.2287 2 11.8726 2.14751 11.61 2.41007L6 8.00007V10.0001H8L13.59 4.39007Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
