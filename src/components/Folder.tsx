import * as React from "react";

const SvgFolder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M9.5 5.5l-1-2h-7v13h17v-11z" />
  </svg>
);

export default SvgFolder;
