import * as React from "react";

const SvgTriangleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M5 13l5-5 5 5z" />
  </svg>
);

export default SvgTriangleUp;
