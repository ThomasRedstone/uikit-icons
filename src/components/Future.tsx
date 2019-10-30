import * as React from "react";

const SvgFuture = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M19 2h-1v4h-4v1h5V2" />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M18 6.548C16.709 3.29 13.354 1 9.6 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9"
    />
    <path d="M9 4h1v7H9z" />
    <path
      d="M13.018 14.197l-3.573-3.572"
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
    />
  </svg>
);

export default SvgFuture;
