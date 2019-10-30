import React from "react";

const SvgGrid = props => (
  <svg width={20} height={20} {...props}>
    <path d="M2 2h3v3H2zM8 2h3v3H8zM14 2h3v3h-3zM2 8h3v3H2zM8 8h3v3H8zM14 8h3v3h-3zM2 14h3v3H2zM8 14h3v3H8zM14 14h3v3h-3z" />
  </svg>
);

export default SvgGrid;
