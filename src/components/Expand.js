import React from "react";

const SvgExpand = props => (
  <svg width={20} height={20} {...props}>
    <path d="M13 2h5v5h-1V3h-4zM2 13h1v4h4v1H2z" />
    <path fill="none" stroke="#000" strokeWidth={1.1} d="M11 9l6-6M3 17l6-6" />
  </svg>
);

export default SvgExpand;
