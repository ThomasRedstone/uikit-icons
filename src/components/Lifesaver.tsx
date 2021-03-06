import * as React from "react";

const SvgLifesaver = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M10 .5C4.76.5.5 4.76.5 10s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5S15.24.5 10 .5zm0 1c1.49 0 2.89.38 4.11 1.06l-2.26 2.26c-.58-.21-1.2-.32-1.85-.32a5.6 5.6 0 00-2.21.46L5.58 2.75A8.34 8.34 0 0110 1.5zM4.96 7.8c-.29.68-.46 1.41-.46 2.2 0 .65.11 1.27.33 1.85l-2.27 2.26A8.407 8.407 0 011.5 10c0-1.62.45-3.13 1.25-4.42l2.21 2.21v.01zM10 18.5c-1.75 0-3.38-.53-4.73-1.44l2.19-2.19c.76.4 1.62.63 2.54.63a5.6 5.6 0 002.21-.46l2.21 2.21A8.34 8.34 0 0110 18.5zm0-4c-2.48 0-4.5-2.02-4.5-4.5S7.52 5.5 10 5.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm5.04-2.29A5.6 5.6 0 0015.5 10c0-.92-.23-1.78-.63-2.54l2.19-2.19A8.438 8.438 0 0118.5 10c0 1.62-.45 3.13-1.25 4.42l-2.21-2.21z" />
  </svg>
);

export default SvgLifesaver;
