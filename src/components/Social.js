import React from "react";

const SvgSocial = props => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M13.4 14l-7.1-3.3M13.5 5.5l-7 3.3"
    />
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      cx={15.5}
      cy={4.6}
      r={2.3}
    />
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      cx={15.5}
      cy={14.8}
      r={2.3}
    />
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      cx={4.5}
      cy={9.8}
      r={2.3}
    />
  </svg>
);

export default SvgSocial;
