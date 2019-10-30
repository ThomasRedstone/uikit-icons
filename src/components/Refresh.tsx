import * as React from "react";

const SvgRefresh = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M17.08 11.15c.01.16.02.32.02.49 0 3.89-3.16 7.05-7.05 7.05C6.16 18.68 3 15.53 3 11.63c0-3.89 3.16-7.05 7.05-7.05.85 0 1.66.15 2.41.42"
    />
    <path fill="none" stroke="#000" d="M9.9 2l2.89 2.89-3 3.01" />
  </svg>
);

export default SvgRefresh;
