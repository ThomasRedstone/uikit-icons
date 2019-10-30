import * as React from "react";

const SvgCommenting = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M1.5 1.5h17v12h-8l-4 4v-4h-5z" />
    <circle cx={10} cy={8} r={1} />
    <circle cx={6} cy={8} r={1} />
    <circle cx={14} cy={8} r={1} />
  </svg>
);

export default SvgCommenting;
