import * as React from "react";

const SvgTriangleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M12 5l-5 5 5 5z" />
  </svg>
);

export default SvgTriangleLeft;
