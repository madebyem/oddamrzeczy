import React from "react";

const SvgIcon4 = props => (
  <svg width={70} height={70} {...props}>
    <defs>
      <clipPath id="Icon-4_svg__a">
        <path fill="none" d="M0 0h82v82H0z" />
      </clipPath>
      <pattern
        id="Icon-4_svg__b"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
      >
        <image
          width={400}
          height={400}
          xlinkHref="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <g
      stroke="rgba(0,0,0,0)"
      fill="url(#Icon-4_svg__b)"
      clipPath="url(#Icon-4_svg__a)"
    >
      <path stroke="none" d="M0 0h82v82H0z" />
      <path fill="none" d="M.5.5h82v82H.5z" />
    </g>
  </svg>
);

export default SvgIcon4;
