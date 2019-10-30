import * as React from "react";

const SvgGitFork = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.2}
      cx={5.79}
      cy={2.79}
      r={1.79}
    />
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.2}
      cx={14.19}
      cy={2.79}
      r={1.79}
    />
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.2}
      cx={10.03}
      cy={16.79}
      r={1.79}
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      d="M5.79 4.57v1.99c0 2.63 4.24 3.66 4.24 6.75 0 1.55.01 1.24.01 1.24v-1.24c0-3.09 4.16-4.12 4.16-6.75V4.57"
    />
  </svg>
);

export default SvgGitFork;
