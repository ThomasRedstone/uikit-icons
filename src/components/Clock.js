import React from "react";

const SvgClock = props => (
  <svg width={20} height={20} {...props}>
    <circle fill="none" stroke="#000" strokeWidth={1.1} cx={10} cy={10} r={9} />
    <path d="M9 4h1v7H9z" />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M13.018 14.197l-3.573-3.572"
    />
  </svg>
);

export default SvgClock;
