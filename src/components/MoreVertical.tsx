import * as React from "react";

const SvgMoreVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle cx={10} cy={3} r={2} />
    <circle cx={10} cy={10} r={2} />
    <circle cx={10} cy={17} r={2} />
  </svg>
);

export default SvgMoreVertical;
