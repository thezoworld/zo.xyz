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
          id="asd00077__a"
          x1={960.82}
          y1={1318.51}
          x2={960.82}
          y2={467.74}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d8f5bf" />
          <stop offset={0.16} stopColor="#bce8b7" />
          <stop offset={0.49} stopColor="#75c5a1" />
          <stop offset={0.98} stopColor="#058e7e" />
          <stop offset={1} stopColor="#008c7d" />
        </linearGradient>
      </defs>
      <g data-name="midground 4">
        <path
          d="M443.13 269.57h41l100.69-13.65 44.37 13.65L796 395.86l84.48 35.84 244.7 146.77 294.13 74.78 501.75 64.8-1 362.43H1.56l-1-641.17S42.07 412.93 83 406.1 246.87 372 246.87 372l157-66.56z"
          fill="url(#asd00077__a)"
        />
        <path
          d="M.56 464.65l203.64-41.49 131.41-59.73 100.7-66.56 47.78-27.3h-41l-39.25 35.84L246.87 372S124 399.27 83 406.1.56 439.31.56 439.31l-1.33 12z"
          style={{
            mixBlendMode: "overlay",
          }}
          fill="#fffdf6"
          opacity={0.37}
        />
        <path
          d="M1419.32 653.25l-294.13-74.78-244.7-146.77L796 395.86l-84.12-63.67 67.13 91L961.09 535.8s100.23 84.79 103.45 89.33 394 38.63 394 38.64z"
          style={{
            mixBlendMode: "overlay",
          }}
          fill="#1e0b53"
          opacity={0.32}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
