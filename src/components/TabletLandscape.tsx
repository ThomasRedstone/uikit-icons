import * as React from "react";

const SvgTabletLandscape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M1.5 5c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5H3c-.8 0-1.5-.7-1.5-1.5V5h0z"
    />
    <circle cx={3.7} cy={10.5} r={0.8} />
  </svg>
);

export default SvgTabletLandscape;
