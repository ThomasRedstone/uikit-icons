import * as React from "react";

const SvgTv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M7 16h6v1H7z" />
    <path fill="none" stroke="#000" d="M.5 3.5h19v11H.5z" />
  </svg>
);

export default SvgTv;
