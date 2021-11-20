import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 1080"
      ref={svgRef}
      {...props}
    >
      <defs>
        <linearGradient
          id="prefixbadasdww22__a"
          x1={959.47}
          y1={521.37}
          x2={959.47}
          y2={726.88}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d8f5bf" />
          <stop offset={0.16} stopColor="#bceeb8" />
          <stop offset={0.49} stopColor="#75dca8" />
          <stop offset={0.98} stopColor="#05c08d" />
          <stop offset={1} stopColor="#00bf8c" />
        </linearGradient>
        <linearGradient
          id="prefixbadasdww22__b"
          x1={737.58}
          y1={376.62}
          x2={737.58}
          y2={727.52}
          xlinkHref="#prefixbadasdww22__a"
        />
        <linearGradient
          id="prefixbadasdww22__c"
          x1={1184.05}
          y1={376.62}
          x2={1184.05}
          y2={727.52}
          xlinkHref="#prefixbadasdww22__a"
        />
      </defs>
      <g data-name="\\\\z/">
        <path
          d="M975.35 565.45c-1 1.36-1.61 2.18-2.25 2.95q-45.65 55.25-91.3 110.46c-5.82 7-11.71 14-17.41 21.14a15.6 15.6 0 00-2 17.54c3 6.18 8 9.34 14.94 9.34h178.08c1 0 2-.09 2.94-.13v-44.43h-122c.78-1.1 1.21-1.79 1.72-2.4q22.88-27.67 45.76-55.32 31.35-37.87 62.69-75.77c4.5-5.45 5.52-11.55 2.47-18s-8.27-9.5-15.44-9.49H870.5v44.06z"
          fill="url(#prefixbadasdww22__a)"
        />
        <path
          fill="url(#prefixbadasdww22__b)"
          d="M791.34 727.52h44.42L684.2 376.62l-44.8.06 151.94 350.84z"
        />
        <path
          fill="url(#prefixbadasdww22__c)"
          d="M1282.23 376.68l-44.8-.06-151.56 350.9h44.42l151.94-350.84z"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
