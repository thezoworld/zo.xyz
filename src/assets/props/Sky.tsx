import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 360 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M177.499 0c100.722 0 182.5 81.778 182.5 182.5S278.221 365 177.499 365c-100.721 0-182.5-81.778-182.5-182.5S76.778 0 177.5 0z"
        fill="#C7E5F0"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
