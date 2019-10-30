import React from "react";

const SvgCalendar = props => (
  <svg width={20} height={20} {...props}>
    <path d="M2 3v14h16V3H2zm15 13H3V8h14v8zm0-9H3V4h14v3z" />
    <path d="M6 2h1v3H6zM13 2h1v3h-1z" />
  </svg>
);

export default SvgCalendar;
