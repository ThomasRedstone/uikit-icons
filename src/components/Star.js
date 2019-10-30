import React from "react";

const SvgStar = props => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.01}
      d="M10 2l2.63 5.27 5.87.85-4.25 4.1 1 5.78L10 15.27 4.75 18l1-5.78-4.25-4.1 5.87-.85z"
    />
  </svg>
);

export default SvgStar;
