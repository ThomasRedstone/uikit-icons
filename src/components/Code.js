import React from "react";

const SvgCode = props => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.01}
      d="M13 4l6 6-6 6M7 4l-6 6 6 6"
    />
  </svg>
);

export default SvgCode;
