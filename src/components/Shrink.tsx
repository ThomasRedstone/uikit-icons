import * as React from "react";

const SvgShrink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M11 4h1v4h4v1h-5zM4 11h5v5H8v-4H4z" />
    <path fill="none" stroke="#000" strokeWidth={1.1} d="M12 8l6-6M2 18l6-6" />
  </svg>
);

export default SvgShrink;
