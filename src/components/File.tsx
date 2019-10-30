import * as React from "react";

const SvgFile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M3.5 1.5h13v17h-13z" />
  </svg>
);

export default SvgFile;
