import React from "react";

const SvgFileText = props => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M3.5 1.5h13v17h-13zM6 12.5h6M6 8.5h8M6 6.5h8M6 10.5h8"
    />
  </svg>
);

export default SvgFileText;
