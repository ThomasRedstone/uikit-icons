import * as React from "react";

const SvgLocation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.01}
      d="M10 .5C6.41.5 3.5 3.39 3.5 6.98 3.5 11.83 10 19 10 19s6.5-7.17 6.5-12.02C16.5 3.39 13.59.5 10 .5h0z"
    />
    <circle fill="none" stroke="#000" cx={10} cy={6.8} r={2.3} />
  </svg>
);

export default SvgLocation;
