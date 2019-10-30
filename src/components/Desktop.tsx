import * as React from "react";

const SvgDesktop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M8 15h1v2H8zM11 15h1v2h-1z" />
    <path d="M5 16h10v1H5z" />
    <path fill="none" stroke="#000" d="M1.5 3.5h17v11h-17z" />
  </svg>
);

export default SvgDesktop;
