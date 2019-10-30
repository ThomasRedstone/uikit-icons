import * as React from "react";

const SvgMore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle cx={3} cy={10} r={2} />
    <circle cx={10} cy={10} r={2} />
    <circle cx={17} cy={10} r={2} />
  </svg>
);

export default SvgMore;
