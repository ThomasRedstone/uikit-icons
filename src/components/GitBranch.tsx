import * as React from "react";

const SvgGitBranch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle fill="none" stroke="#000" strokeWidth={1.2} cx={7} cy={3} r={2} />
    <circle fill="none" stroke="#000" strokeWidth={1.2} cx={14} cy={6} r={2} />
    <circle fill="none" stroke="#000" strokeWidth={1.2} cx={7} cy={17} r={2} />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      d="M14 8c0 2.41-1.57 2.87-3.44 3.25C9.09 11.54 7 12.06 7 15V5"
    />
  </svg>
);

export default SvgGitBranch;
