import * as React from "react";

const SvgChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" strokeWidth={1.03} d="M13 16l-6-6 6-6" />
  </svg>
);

export default SvgChevronLeft;
