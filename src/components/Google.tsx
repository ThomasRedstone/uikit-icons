import * as React from "react";

const SvgGoogle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <path d="M17.86 9.09c.6 3.03-.72 6.96-4.05 8.47-4.36 1.97-9.68.12-11.34-4.69C.68 7.68 4.22 2.42 9.5 2.03c2.07-.15 3.92.34 5.55 1.62.17.13.32.28.56.49-.71.67-1.38 1.31-2.11 2-1.23-1.06-2.66-1.42-4.22-1.16-1.16.19-2.12.78-2.91 1.65-1.49 1.64-1.75 4.23-.61 6.19 1.19 2.05 3.41 2.98 5.81 2.43 1.7-.38 3.19-1.92 3.32-3.5h-4.38V9.09h7.35z" />
  </svg>
);

export default SvgGoogle;