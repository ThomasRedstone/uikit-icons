import * as React from "react";

const SvgBolt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M4.74 20l2.99-8H3L15.43 1l-3.11 8h4.7L4.74 20zm4.44-9L7.1 16.39 14.47 10h-3.61l2.13-5.33L5.61 11h3.57z" />
  </svg>
);

export default SvgBolt;
