import * as React from "react";

const SvgLaptop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M0 16h20v1H0z" />
    <path fill="none" stroke="#000" d="M2.5 4.5h15v10h-15z" />
  </svg>
);

export default SvgLaptop;
