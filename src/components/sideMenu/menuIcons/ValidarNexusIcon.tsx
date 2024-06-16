import React, { ForwardedRef } from 'react';

interface HomeIconProps {
  [key: string]: any;
}

const ParticiparNexusIcon = ({ ...props }: HomeIconProps, svgRef: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="33"
    viewBox="0 0 35 33"
    fill="none"
    ref={svgRef}
    {...props}
  >
    <path
      d="M11.7705 14.8716L16.6558 19.7568L32.94 3.47263M31.3116 16.5V27.8989C31.3116 28.7627 30.9684 29.5911 30.3577 30.2019C29.7469 30.8127 28.9185 31.1558 28.0547 31.1558H5.25684C4.39307 31.1558 3.56468 30.8127 2.95391 30.2019C2.34313 29.5911 2 28.7627 2 27.8989V5.10105C2 4.23728 2.34313 3.40889 2.95391 2.79811C3.56468 2.18734 4.39307 1.84421 5.25684 1.84421H23.1695"
      stroke="#052A76"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default React.forwardRef(ParticiparNexusIcon);
