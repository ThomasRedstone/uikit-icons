import * as React from "react";

const SvgSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle fill="none" stroke="#000" strokeWidth={1.1} cx={9} cy={9} r={7} />
    <path fill="none" stroke="#000" strokeWidth={1.1} d="M14 14l4 4-4-4z" />
  </svg>
);

export default SvgSearch;
