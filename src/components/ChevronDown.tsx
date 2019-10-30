import * as React from "react";

const SvgChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" strokeWidth={1.03} d="M16 7l-6 6-6-6" />
  </svg>
);

export default SvgChevronDown;
