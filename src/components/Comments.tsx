import * as React from "react";

const SvgComments = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M2 .5h17.5V13" />
    <path d="M5 19.71V15H0V2h18v13H9.71L5 19.71zM1 14h5v3.29L9.29 14H17V3H1v11z" />
  </svg>
);

export default SvgComments;
