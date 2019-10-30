import * as React from "react";

const SvgPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M9 1h1v17H9z" />
    <path d="M1 9h17v1H1z" />
  </svg>
);

export default SvgPlus;
