import React from "react";

const SvgLink = props => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M10.625 12.375l-3.1 3.1c-.7.7-1.6.7-2.3 0l-.7-.7c-.7-.701-.7-1.6 0-2.3l3.1-3.1M9.325 7.375l3.1-3.1c.7-.7 1.6-.7 2.299 0l.701.7c.7.7.7 1.6 0 2.3l-3.1 3.1M7.925 11.875l4-3.9"
    />
  </svg>
);

export default SvgLink;
