import * as React from "react";

const SvgBell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M17 15.5H3c-.01-.89.79-2.16 1.1-2.99.48-1.21.62-2.16 1.09-5.5.35-2.48.7-3.81 2.09-4.85.85-.6 2.09-.66 2.53-.66h.15s1.66-.09 2.71.67c1.41 1.03 1.75 2.37 2.1 4.85.49 3.33.63 4.29 1.1 5.5.33.82 1.14 2.09 1.13 2.98h0z"
    />
    <path
      fill="none"
      stroke="#000"
      d="M12.39 16c0 1.37-1.04 2.43-2.48 2.43-1.43 0-2.49-1.06-2.49-2.43"
    />
  </svg>
);

export default SvgBell;
