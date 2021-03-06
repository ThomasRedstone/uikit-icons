import * as React from "react";

const SvgNut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M2.5 5.7L10 1.3l7.5 4.4v8.6L10 18.7l-7.5-4.4z"
    />
    <circle fill="none" stroke="#000" cx={10} cy={10} r={3.5} />
  </svg>
);

export default SvgNut;
