import * as React from "react";

const SvgPhoneLandscape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M17 5.5c.8 0 1.5.7 1.5 1.5v7c0 .8-.7 1.5-1.5 1.5H3c-.8 0-1.5-.7-1.5-1.5V7c0-.8.7-1.5 1.5-1.5h14z"
    />
    <circle cx={3.8} cy={10.5} r={0.8} />
  </svg>
);

export default SvgPhoneLandscape;
