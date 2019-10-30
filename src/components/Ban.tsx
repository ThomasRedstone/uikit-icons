import * as React from "react";

const SvgBan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle fill="none" stroke="#000" strokeWidth={1.1} cx={10} cy={10} r={9} />
    <path fill="none" stroke="#000" strokeWidth={1.1} d="M4 3.5l12 13" />
  </svg>
);

export default SvgBan;
