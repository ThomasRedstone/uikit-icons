import * as React from "react";

const SvgPull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M6.85 8l2.65 2.6L12.15 8l.7.7L9.5 12 6.15 8.7z" />
    <path fill="none" stroke="#000" d="M9.5 11V2M6 5.5H3.5v13h12v-13H13" />
  </svg>
);

export default SvgPull;
