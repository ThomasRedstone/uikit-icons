import * as React from "react";

const SvgChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" strokeWidth={1.03} d="M7 4l6 6-6 6" />
  </svg>
);

export default SvgChevronRight;
