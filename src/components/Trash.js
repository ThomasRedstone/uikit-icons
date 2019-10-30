import React from "react";

const SvgTrash = props => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M6.5 3V1.5h7V3M4.5 4v14.5h11V4" />
    <path d="M8 7h1v9H8zM11 7h1v9h-1zM2 3h16v1H2z" />
  </svg>
);

export default SvgTrash;
