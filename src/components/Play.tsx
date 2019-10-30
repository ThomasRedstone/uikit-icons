import * as React from "react";

const SvgPlay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M6.5 5l8 5-8 5z" />
  </svg>
);

export default SvgPlay;
