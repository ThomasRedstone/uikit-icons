import * as React from "react";

const SvgDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M14 10l-4.5 4.5L5 10" />
    <path d="M3 17h13v1H3z" />
    <path fill="none" stroke="#000" d="M9.5 13.91V3" />
  </svg>
);

export default SvgDownload;
