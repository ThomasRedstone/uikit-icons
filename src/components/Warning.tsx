import * as React from "react";

const SvgWarning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} {...props}>
    <circle cx={10} cy={14} r={1} />
    <circle fill="none" stroke="#000" strokeWidth={1.1} cx={10} cy={10} r={9} />
    <path d="M10.97 7.72c-.12 1.82-.41 3.57-.41 3.57-.05.58-.29.71-.57.71-.3 0-.5-.13-.56-.71 0 0-.27-1.75-.4-3.57-.07-1.18 0-1.72 0-1.72 0-.55.43-.98.96-1 .54.01.98.44.98 1 0 0 .07.54 0 1.72z" />
  </svg>
);

export default SvgWarning;
