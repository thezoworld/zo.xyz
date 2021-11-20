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
          id="kksa-1__linear-gradient"
          x1={960.82}
          y1={1055.53}
          x2={960.82}
          y2={270.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d8f5bf" />
          <stop offset={0.16} stopColor="#bceeb8" />
          <stop offset={0.49} stopColor="#75dca8" />
          <stop offset={0.98} stopColor="#05c08d" />
          <stop offset={1} stopColor="#00bf8c" />
        </linearGradient>
        <style>
          {".kksa-1__cls-3{fill:#1e0b53;mix-blend-mode:overlay;opacity:.59}"}
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="kksa-1__midground_5" data-name="midground 5">
          <path
            d="M1921.07 339.28s-17.06 11.49-41 25.14-78.5 11.94-78.5 11.94H1776l-27.31-18.77-52.9 35.84-70 51.2-71.64-54.63-12-20.48-27.31 5.12L1375 454.87l-22.19 17.07h-39.25l-46.08-10.24L1130.9 559 .56 819.41l1 261.07h1918.51z"
            fill="url(#kksa-1__linear-gradient)"
          />
          <path
            className="kksa-1__cls-3"
            d="M1534.52 468.1L1500 495l-28.16 49.91V586L1436 647.29l-23.46 41.39 87.46-86.19 54.79-82.77 71.08-75.09-71.72-54.63c4.69 34.58-19.63 78.1-19.63 78.1zM1880.11 364.42a50.39 50.39 0 01-6.47 3.05s-31.93 40.47-55 58.39-92.15 67.84-92.15 67.84-42.24 70.39-70.4 87-115.2 82.35-115.2 82.35L1274 1080l646.07.48 1-741.2s-17.07 11.49-40.96 25.14z"
          />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
