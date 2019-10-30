import * as React from "react";

const SvgMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M2 4h16v1H2zM2 9h16v1H2zM2 14h16v1H2z" />
  </svg>
);

export default SvgMenu;
