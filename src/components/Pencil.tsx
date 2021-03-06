import * as React from "react";

const SvgPencil = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M17.25 6.01L7.12 16.1l-3.3 1.1 1.2-3.3 10.1-10.02c.59-.59 1.54-.59 2.13 0 .58.59.58 1.54 0 2.13h0zM15.98 7.268l-2.129-2.12"
    />
  </svg>
);

export default SvgPencil;
