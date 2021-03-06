import * as React from "react";

const SvgImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle cx={16.1} cy={6.1} r={1.1} />
    <path fill="none" stroke="#000" d="M.5 2.5h19v15H.5z" />
    <path fill="none" stroke="#000" strokeWidth={1.01} d="M4 13l4-4 5 5" />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.01}
      d="M11 12l1.5-1.5L16 14"
    />
  </svg>
);

export default SvgImage;
