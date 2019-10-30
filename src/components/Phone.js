import React from "react";

const SvgPhone = props => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M15.5 17c0 .8-.7 1.5-1.5 1.5H7c-.8 0-1.5-.7-1.5-1.5V3c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5v14h0z"
    />
    <circle cx={10.5} cy={16.5} r={0.8} />
  </svg>
);

export default SvgPhone;
