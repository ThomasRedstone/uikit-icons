import * as React from "react";

const SvgMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M1 9h18v1H1z" />
  </svg>
);

export default SvgMinus;
