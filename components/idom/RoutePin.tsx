type RoutePinProps = {
  x: number;
  y: number;
  label?: string;
  color: string;
  current?: boolean;
  tone?: string;
  status?: string;
};

export function RoutePin({ x, y, color, current, tone, status }: RoutePinProps) {
  return (
    <g>
      {current && (
        <circle cx={x} cy={y} r="20" fill={color} opacity=".25">
          <animate attributeName="r" values="14;26;14" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".35;0;.35" dur="2s" repeatCount="indefinite" />
        </circle>
      )}
      <circle
        cx={x}
        cy={y}
        r="10"
        fill={color}
        stroke={tone === 'dark' ? '#0e3c4a' : '#fcfcff'}
        strokeWidth="2.5"
      />
      {status === 'ok' && (
        <path
          d={`M${x - 4} ${y + 0.5} L${x - 1} ${y + 3} L${x + 4} ${y - 3}`}
          stroke="#0e3c4a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </g>
  );
}
