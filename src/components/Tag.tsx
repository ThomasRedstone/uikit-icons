import * as React from "react";

const SvgTag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M17.5 3.71v4.01c0 .24-.1.48-.29.67L8.39 17.2c-.4.4-1.06.4-1.46 0L2.8 13.07c-.4-.4-.4-1.06 0-1.46l8.81-8.81c.2-.2.47-.3.73-.3h3.85c.33 0 .67.13.92.38.24.23.37.52.39.83h0z"
    />
    <circle cx={14} cy={6} r={1} />
  </svg>
);

export default SvgTag;
