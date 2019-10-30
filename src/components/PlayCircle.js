import React from "react";

const SvgPlayCircle = props => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" strokeWidth={1.1} d="M8.5 7l5 3-5 3z" />
    <circle fill="none" stroke="#000" strokeWidth={1.1} cx={10} cy={10} r={9} />
  </svg>
);

export default SvgPlayCircle;
