import React from "react";

const SvgAlbum = props => (
  <svg width={20} height={20} {...props}>
    <path d="M5 2h10v1H5zM3 4h14v1H3z" />
    <path fill="none" stroke="#000" d="M1.5 6.5h17v11h-17z" />
  </svg>
);

export default SvgAlbum;
