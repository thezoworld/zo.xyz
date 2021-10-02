import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 718 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M17.163 6.574V214.72h677.914V6.574H17.163z"
        fill="url(#fdsah__paint0_linear)"
      />
      <g filter="url(#fdsah__filter0_d)">
        <path fill="#FF794B" d="M4 .815h710V11.51H4z" />
      </g>
      <path
        d="M352.984 113.117c-.202.303-.303.506-.505.607-6.568 7.983-13.137 15.865-19.705 23.848-1.213 1.516-2.527 3.032-3.739 4.548-.91 1.111-1.112 2.425-.405 3.739.607 1.313 1.718 2.021 3.234 2.021H370.871v-9.6h-26.375c.202-.202.303-.405.404-.506 3.335-3.941 6.569-7.983 9.903-11.924 4.548-5.457 8.994-10.914 13.542-16.371 1.01-1.212 1.212-2.526.505-3.84-.606-1.415-1.819-2.021-3.335-2.021h-35.268v9.499h22.737zM419.172 72.392h-9.701L376.83 148.08h9.6l32.742-75.69zM313.273 148.081h9.6l-32.741-75.69h-9.701l32.842 75.69z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="fdsah__paint0_linear"
          x1={17.163}
          y1={214.72}
          x2={695.077}
          y2={214.72}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E04D4F" />
          <stop offset={1} stopColor="#F76E4C" />
        </linearGradient>
        <filter
          id="fdsah__filter0_d"
          x={0.709}
          y={0.815}
          width={716.582}
          height={17.277}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={3.291} />
          <feGaussianBlur stdDeviation={1.645} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
