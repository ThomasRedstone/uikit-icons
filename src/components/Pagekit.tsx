import * as React from "react";

const SvgPagekit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M3 1h14v15h-7v-3h4V4H6v12h4v3H3z" />
  </svg>
);

export default SvgPagekit;
