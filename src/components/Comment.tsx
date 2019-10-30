import * as React from "react";

const SvgComment = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M6 18.71V14H1V1h18v13h-8.29L6 18.71zM2 13h5v3.29L10.29 13H18V2H2v11z" />
  </svg>
);

export default SvgComment;
