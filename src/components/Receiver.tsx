import * as React from "react";

const SvgReceiver = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.01}
      d="M6.189 13.611c1.945 1.914 4.908 4.628 7.678 4.646 2.603.018 4.333-2.016 4.333-2.016l-3.691-3.69-2.97 1.088-5.35-5.349 1.124-2.935L3.76 1.8S1.732 3.537 1.7 6.092c-.033 2.717 2.647 5.646 4.489 7.519"
    />
  </svg>
);

export default SvgReceiver;
