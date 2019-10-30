import React from "react";

const SvgMinusCircle = props => (
  <svg width={20} height={20} {...props}>
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      cx={9.5}
      cy={9.5}
      r={9}
    />
    <path fill="none" stroke="#000" d="M5 9.5h9" />
  </svg>
);

export default SvgMinusCircle;
