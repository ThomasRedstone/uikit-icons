import * as React from "react";

const SvgWorld = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M1 10.5h18M2.35 15.5h15.3M2.35 5.5h15.173M10 19.46h-.02c-2.67-2.13-4.37-5.319-4.37-8.88 0-3.56 1.72-6.75 4.39-8.88.01 0-.01 0 0 0h0c2.67 2.13 4.4 5.32 4.4 8.88 0 3.561-1.73 6.75-4.4 8.88h0z"
    />
    <circle fill="none" stroke="#000" cx={10} cy={10.5} r={9} />
  </svg>
);

export default SvgWorld;
