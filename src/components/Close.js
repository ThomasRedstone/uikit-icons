import React from "react";

const SvgClose = props => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.06}
      d="M16 16L4 4M16 4L4 16"
    />
  </svg>
);

export default SvgClose;
