import * as React from "react";

const SvgPrint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M4.5 13.5h-3v-7h17v7h-3M15.5 6.5v-4h-11v4"
    />
    <path fill="none" stroke="#000" d="M4.5 11.5h11v6h-11z" />
    <path d="M6 13h8v1H6zM6 15h8v1H6z" />
  </svg>
);

export default SvgPrint;
