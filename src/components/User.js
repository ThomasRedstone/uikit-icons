import React from "react";

const SvgUser = props => (
  <svg width={20} height={20} {...props}>
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      cx={9.9}
      cy={6.4}
      r={4.4}
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M1.5 19c.8-4.5 4.3-7.8 8.5-7.8s7.7 3.4 8.5 8"
    />
  </svg>
);

export default SvgUser;
