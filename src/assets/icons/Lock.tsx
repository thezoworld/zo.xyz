import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 25 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M21.84 33.41H2.705c-1.513 0-2.67-1.157-2.67-2.67V16.5c0-1.513 1.157-2.67 2.67-2.67H21.84c1.513 0 2.67 1.157 2.67 2.67v14.24c0 1.424-1.246 2.67-2.67 2.67z"
        fill="#FFE500"
      />
      <path
        d="M21.84 13.83H2.705c-1.513 0-2.67 1.157-2.67 2.67v3.56c0-1.513 1.157-2.67 2.67-2.67H21.84c1.513 0 2.67 1.157 2.67 2.67V16.5c0-1.513-1.246-2.67-2.67-2.67z"
        fill="#FFF48C"
      />
      <path
        d="M12.226.48c-5.25 0-9.523 4.271-9.523 9.522v3.739h4.005v-3.739c0-3.115 2.492-5.518 5.607-5.518a5.489 5.489 0 015.518 5.518v3.739h4.005v-3.739c0-5.25-4.272-9.523-9.612-9.523z"
        fill="#DAEDF7"
      />
      <path
        d="M12.226.48c-5.25 0-9.523 4.271-9.523 9.522v2.225c0-5.25 4.272-9.523 9.523-9.523 5.251 0 9.612 4.272 9.612 9.612v-2.314c0-5.25-4.272-9.523-9.612-9.523z"
        fill="#fff"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
