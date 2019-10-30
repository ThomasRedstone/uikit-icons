import React from "react";

const SvgHappy = props => (
  <svg width={20} height={20} {...props}>
    <circle cx={13} cy={7} r={1} />
    <circle cx={7} cy={7} r={1} />
    <circle fill="none" stroke="#000" cx={10} cy={10} r={8.5} />
    <path
      fill="none"
      stroke="#000"
      d="M14.6 11.4c-.7 1.9-2.5 3.1-4.6 3.1-2.1 0-3.9-1.2-4.6-3.1"
    />
  </svg>
);

export default SvgHappy;
