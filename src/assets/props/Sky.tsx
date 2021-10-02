import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 183 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M91.5 0C141.999 0 183 41.001 183 91.5S141.999 183 91.5 183 0 141.999 0 91.5 41.001 0 91.5 0z"
        fill="#C7E5F0"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
