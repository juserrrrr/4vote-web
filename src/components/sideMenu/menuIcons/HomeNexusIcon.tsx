import React, { ForwardedRef } from 'react';

interface HomeIconProps {
  [key: string]: any;
}

const HomeNexusIcon = ({ ...props }: HomeIconProps, svgRef: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    ref={svgRef}
    {...props}
  >
    <path
      d="M26 23.1295V13.8536C26.0001 13.2083 25.8667 12.5697 25.6082 11.977C25.3497 11.3844 24.9713 10.8501 24.4964 10.4069L15.6488 2.14797C15.2032 1.73185 14.6132 1.5 14 1.5C13.3868 1.5 12.7968 1.73185 12.3512 2.14797L3.5036 10.4069C3.02867 10.8501 2.65034 11.3844 2.3918 11.977C2.13325 12.5697 1.99993 13.2083 2 13.8536V23.1295C2 23.7582 2.25286 24.3611 2.70294 24.8057C3.15303 25.2502 3.76348 25.5 4.4 25.5H23.6C24.2365 25.5 24.847 25.2502 25.2971 24.8057C25.7471 24.3611 26 23.7582 26 23.1295Z"
      stroke="#052A76"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default React.forwardRef(HomeNexusIcon);
