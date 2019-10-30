import * as React from "react";

const SvgTable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M1 3h18v1H1zM1 7h18v1H1zM1 11h18v1H1zM1 15h18v1H1z" />
  </svg>
);

export default SvgTable;
