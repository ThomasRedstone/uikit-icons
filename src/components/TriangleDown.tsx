import * as React from "react";

const SvgTriangleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M5 7h10l-5 5z" />
  </svg>
);

export default SvgTriangleDown;
