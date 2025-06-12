import React from "react";

interface ArrowLeftProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ width = 8, height = 16, fill = "black" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.22936 8.47377L5.00069 12.2451L5.94336 11.3024L2.64336 8.00243L5.94336 4.70243L5.00069 3.75977L1.22936 7.5311C1.10438 7.65612 1.03417 7.82566 1.03417 8.00243C1.03417 8.17921 1.10438 8.34875 1.22936 8.47377Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowLeft;
