import * as React from "react";

const SvgMicrophone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" stroke="#000" d="M10 16.44v2.06M7 18.5h6" />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M13.5 4.89v5.87a3.5 3.5 0 01-7 0V4.89a3.5 3.5 0 017 0z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M15.5 10.36V11a5.5 5.5 0 01-11 0v-.6"
    />
  </svg>
);

export default SvgMicrophone;
