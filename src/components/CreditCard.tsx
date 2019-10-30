import * as React from "react";

const SvgCreditCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M1.5 4.5h17v12h-17z" />
    <path d="M1 7h18v3H1z" />
  </svg>
);

export default SvgCreditCard;
