import * as React from "react";

const SvgCart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle cx={7.3} cy={17.3} r={1.4} />
    <circle cx={13.3} cy={17.3} r={1.4} />
    <path fill="none" stroke="#000" d="M0 2l3.2 2 2.1 8.5H16l2-6H8" />
  </svg>
);

export default SvgCart;
