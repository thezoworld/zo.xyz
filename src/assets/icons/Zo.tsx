import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 41 23"
      ref={svgRef}
      {...props}
    >
      <path
        d="M20.969 12.692c-.059.088-.088.146-.146.175-1.899 2.307-3.797 4.585-5.695 6.892-.35.438-.73.876-1.08 1.314-.264.322-.322.701-.117 1.08.175.38.496.585.934.585h11.273v-2.774h-7.623c.059-.059.088-.117.117-.146.964-1.14 1.898-2.308 2.862-3.446 1.314-1.577 2.6-3.154 3.913-4.731.293-.35.351-.73.147-1.11-.176-.409-.526-.584-.964-.584H14.398v2.745h6.57zM40.097.923h-2.804L27.86 22.796h2.775L40.097.923zM9.491 22.796h2.774L2.804.923H0l9.491 21.873z"
        fill={props.fill || "#DB4E40"}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
