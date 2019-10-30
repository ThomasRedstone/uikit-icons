import * as React from "react";

const SvgThumbnails = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M3.5 3.5h5v5h-5zM11.5 3.5h5v5h-5zM11.5 11.5h5v5h-5zM3.5 11.5h5v5h-5z"
    />
  </svg>
);

export default SvgThumbnails;
