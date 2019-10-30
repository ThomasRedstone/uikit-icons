import * as React from "react";

const SvgCamera = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      cx={10}
      cy={10.8}
      r={3.8}
    />
    <path
      fill="none"
      stroke="#000"
      d="M1 4.5c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h18c.3 0 .5-.2.5-.5V5c0-.3-.2-.5-.5-.5h-5.5V2.9c0-.3-.2-.4-.5-.4H7c-.3 0-.5.1-.5.4v1.6H1h0z"
    />
  </svg>
);

export default SvgCamera;
