import * as React from "react";

const SvgArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M10 14L5 9.5 10 5M16 9.5L5 9.52" />
  </svg>
);

export default SvgArrowLeft;
