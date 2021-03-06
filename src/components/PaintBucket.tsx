import * as React from "react";

const SvgPaintBucket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M10.21 1L0 11.21l8.1 8.1L18.31 9.1 10.21 1zm6.68 8.1L15 11H1.7l8.51-8.58 6.68 6.68z" />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1.1}
      d="M6.42 2.33l5.28 5.28"
    />
    <path d="M18.49 12S20 14.06 20 15.36c0 .92-.76 1.64-1.51 1.64S17 16.28 17 15.36c0-1.3 1.49-3.36 1.49-3.36z" />
  </svg>
);

export default SvgPaintBucket;
