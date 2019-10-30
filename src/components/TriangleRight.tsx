import * as React from "react";

const SvgTriangleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M8 5l5 5-5 5z" />
  </svg>
);

export default SvgTriangleRight;
