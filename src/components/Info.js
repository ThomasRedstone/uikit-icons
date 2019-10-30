import React from "react";

const SvgInfo = props => (
  <svg width={20} height={20} {...props}>
    <path d="M12.13 11.59c-.16 1.25-1.78 2.53-3.03 2.57-2.93.04.79-4.7-.36-5.79.56-.21 1.88-.54 1.88.44 0 .82-.5 1.74-.74 2.51-1.22 3.84 2.25-.17 2.26-.14.02.03.02.17-.01.41-.05.36.03-.24 0 0zm-.57-5.92c0 1-2.2 1.48-2.2.36 0-1.03 2.2-1.49 2.2-.36z" />
    <circle fill="none" stroke="#000" strokeWidth={1.1} cx={10} cy={10} r={9} />
  </svg>
);

export default SvgInfo;
