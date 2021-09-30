import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 26 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke || "#DB4E40"}
        strokeWidth={2}
        strokeLinecap="round"
        d="M1 1h24M1 8h24M1 15h24"
      />
    </svg>
  );
}

export default SvgComponent;
