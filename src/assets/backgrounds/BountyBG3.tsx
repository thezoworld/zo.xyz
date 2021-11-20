import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920.51 632.17"
      ref={svgRef}
      {...props}
    >
      <defs>
        <linearGradient
          id="prefaseeix__linear-gradient"
          x1={960.25}
          y1={780.41}
          x2={960.25}
          y2={287.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#509e92" />
          <stop offset={1} stopColor="#00464c" />
        </linearGradient>
        <style>
          {
            ".prefaseeix__cls-3{fill:#1e0b53;mix-blend-mode:overlay;opacity:.08}"
          }
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="prefaseeix__Layer_2" data-name="Layer 2">
          <g id="prefaseeix__midgroup_2" data-name="midgroup 2">
            <path
              d="M1920.51 0l-73.39 126.15s-177.41 29-207.31 27.31-65.75 20.48-65.75 20.48L1411.93 249h-47.78l-116.05-23.86h-39.26l-90 34.13h-44.36l-19.59 8.53-36.17-23.89-62-25.6L942.64 203l-50.27-5.12-20-20.48-34.19 6.83-78.18 39.2-41 13.66-99 20.47-88.75 52.91s-140.69 63.28-186.61 70-223.33 38.27-223.33 38.27L0 388.1l1 237.07h1918.51z"
              fill="url(#prefaseeix__linear-gradient)"
            />
            <path
              className="prefaseeix__cls-3"
              d="M590.82 632.17l68.92-142.93 102.39-84.48s46.06-57.6 71-66.56 49.64-16.64 68-26.88 28.57-28.16 60-24.32c0 0 13.67-14.08 48.77-10.24s45-9 45-9l-36.17-23.89-62-25.6L942.64 203l-50.27-5.12-20-20.48-29.12 45.6L787 265.24l-62 25.6s-21.75 47.36-44.79 66.56-111.36 56.32-111.36 56.32l-67.84 73-110.24 145.45h200.05M1271.45 229.95l-48.53 31.45-30.72 53.76-40.96 67.84-96.37 45.65L951.13 530.2l-30.41 78.08 96.34-111.39 125.54-65.25 108.48-57.6 70.4-65.28 90.45-59.73h-47.78l-92.7-19.08z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
