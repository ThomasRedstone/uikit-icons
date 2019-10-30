import React from "react";

const SvgCopy = props => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M3.5 2.5h12v16h-12z" />
    <path fill="none" stroke="#000" d="M5 .5h12.5V17" />
  </svg>
);

export default SvgCopy;
