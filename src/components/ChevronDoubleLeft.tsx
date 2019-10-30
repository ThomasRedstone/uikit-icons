import * as React from "react";

const SvgChevronDoubleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.03}
      d="M10 14l-4-4 4-4M14 14l-4-4 4-4"
    />
  </svg>
);

export default SvgChevronDoubleLeft;
