import * as React from "react";

const SvgFileEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path
      fill="none"
      stroke="#000"
      d="M18.65 1.68c-.24-.23-.541-.35-.84-.35-.311 0-.601.12-.83.35L8.92 9.76 8 12.33l2.55-.92 8.101-8.07c.469-.47.469-1.19-.001-1.66h0z"
    />
    <path fill="none" stroke="#000" d="M16.5 8.482V18.5h-13v-17h10.711" />
  </svg>
);

export default SvgFileEdit;
