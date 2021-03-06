import * as React from "react";

const SvgLock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M3.5 8.5h13v10h-13zM6.5 8V4.88C6.5 3.01 8.07 1.5 10 1.5s3.5 1.51 3.5 3.38V8"
    />
  </svg>
);

export default SvgLock;
