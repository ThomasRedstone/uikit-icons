import * as React from "react";

const SvgSignIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M7 2h10v15H7v-1h9V3H7z" />
    <path d="M9.1 13.4l-.6-.6 2.78-2.8H4V9h7.28L8.5 6.2l.6-.58L13 9.5z" />
  </svg>
);

export default SvgSignIn;
