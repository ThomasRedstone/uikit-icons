import * as React from "react";

const SvgTablet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M5 18.5c-.8 0-1.5-.7-1.5-1.5V3c0-.8.7-1.5 1.5-1.5h11c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5H5h0z"
    />
    <circle cx={10.5} cy={16.3} r={0.8} />
  </svg>
);

export default SvgTablet;
