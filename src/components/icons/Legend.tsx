interface LegendIconProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function LegendIcon({ color = "#1DB3FB", width = 14, height = 14 }: LegendIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }}
    >
      <path
        strokeWidth="4"
        fill="none"
        stroke={color}
        d="M0,16h10.666666666666666 A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16 H32M21.333333333333332,16 A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
      />
    </svg>
  );
}
