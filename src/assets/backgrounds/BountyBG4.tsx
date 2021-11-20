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
          id="ass821msa__a"
          x1={960.15}
          y1={1353.7}
          x2={960.15}
          y2={725.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9bcdab" />
          <stop offset={0.49} stopColor="#51a496" />
          <stop offset={1} stopColor="#00777e" />
        </linearGradient>
      </defs>
      <g data-name="midground 3">
        <path
          d="M1921.07 750.05L841 706.47l-207.59-48.63-67.84-66.56-55.46-21.76-80.21-75.09-93.9-39.26h-70s-122 55-155.3 59.74-91.19 31.57-91.19 31.57L-.77 554 .56 671.37l1 409.11h1918.51z"
          fill="url(#ass821msa__a)"
        />
        <path
          style={{
            mixBlendMode: "overlay",
          }}
          fill="#1e0b53"
          opacity={0.08}
          d="M483.66 711.59l-53.76 21.76-204.8 125.44v178.34l1695.97-.33V750.05L840.96 706.47l-207.55-48.63-67.84-66.56-42.23 41.38-39.68 78.93z"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
