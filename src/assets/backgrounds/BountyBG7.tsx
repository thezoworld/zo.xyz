import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      ref={svgRef}
      {...props}
    >
      <defs>
        <linearGradient
          id="p211319asda__a"
          x1={960.82}
          y1={1279.93}
          x2={960.82}
          y2={278.14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff8cf" />
          <stop offset={0.14} stopColor="#f6f7cc" />
          <stop offset={0.37} stopColor="#def5c2" />
          <stop offset={0.66} stopColor="#b6f2b3" />
          <stop offset={1} stopColor="#80ee9e" />
        </linearGradient>
      </defs>
      <g data-name="midground 6">
        <path
          d="M1269.14 503.88s-29.87-35-37.55-54.62-14.5-53.76-37.54-62.29-50.88-19.62-50.88-19.62l-37-27.31-17.07-12.8h-20.48s-10.24 9.39-24.74 10.24-53.76 19.63-53.76 19.63-38.4 26.45-45.23 29.86S886 405.74 886 405.74l-76.8 24.75L706 488.52l-704.39 592h1918.46z"
          fill="url(#p211319asda__a)"
        />
        <path
          d="M1133.89 375c14.08 9 49.92 41 47.36 56.32s-38.08 41-38.08 41l-15.68 37.12-66.56 32L1056 1080l864.07.48-650.93-576.6s-29.87-35-37.55-54.62-14.5-53.76-37.54-62.29-50.88-19.62-50.88-19.62l-37-27.31s13.64 26.03 27.72 34.96z"
          style={{
            mixBlendMode: "overlay",
          }}
          fill="#1e0b53"
          opacity={0.59}
        />
        <path
          d="M961.09 404l26.46-17 28.16-29.86 39.6-22.12a39.14 39.14 0 01-11.44 2.49c-14.51.85-53.76 19.63-53.76 19.63s-38.4 26.45-45.23 29.86S886 405.74 886 405.74l-76.8 24.75 46.08-3.41z"
          style={{
            mixBlendMode: "overlay",
          }}
          fill="#fffdf6"
          opacity={0.37}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
