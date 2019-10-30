import React from "react";

const SvgArrowUp = props => (
  <svg width={20} height={20} {...props}>
    <path d="M10.5 4l4.87 5.4-.74.68-4.13-4.59-4.13 4.59-.74-.68z" />
    <path fill="none" stroke="#000" d="M10.5 16V5" />
  </svg>
);

export default SvgArrowUp;
