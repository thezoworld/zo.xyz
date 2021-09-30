import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 88 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M.162 67.606l-7.28 18.553-.032.128-.418 15.783c0 .032.032.064.064.032l14.107-9.018.033-.033 9.501-17.489L.162 67.606z"
        fill="#F06924"
      />
      <path
        d="M21.998 105.838L5.926 90.733l-11.305 7.214.354-12.626-22.642-4.251 1.417 7.472.74.483-23.866 49.57 39.97 19.905 23.545-49.698.999.515 6.86-3.479z"
        fill="#EF6623"
      />
      <path
        d="M-4.54 45.64c-.161.837-.322 1.643-.451 2.448-.934 6.152-.419 12.078 2.287 17.586 3.253 6.635 8.47 10.79 15.814 11.95 5.411.837 10.565-.387 15.428-3.028 3.318-1.804 6.184-4.155 8.696-6.99.258-.29.355-.29.612 0 .741.934 1.772 1.224 2.931.999 1.031-.193 1.933-.74 2.706-1.45 1.482-1.32 2.48-2.963 3.06-4.83.45-1.418.644-2.867.29-4.349-.29-1.16-.87-2.061-1.997-2.48-.322-.129-.355-.226-.258-.516.74-2.157 1.288-4.348 1.578-6.602.838-6.217.161-12.175-2.737-17.65-3.092-5.83-7.763-9.631-14.204-11.016-5.54-1.192-10.855-.161-15.944 2.416C8.086 24.768 3.995 28.666.71 33.529c-.161.258-.226.323-.451.033-.773-.967-1.772-1.256-2.963-1.031-.999.193-1.836.709-2.61 1.353-1.288 1.095-2.222 2.48-2.866 4.058-.644 1.61-.998 3.253-.644 4.992.419 2.19 2.03 3.35 4.155 2.738.032-.032.064-.032.129-.032z"
        fill="#fff"
      />
      <path
        d="M-4.54 45.64h-.13c-2.125.612-3.703-.548-4.154-2.738-.354-1.707 0-3.382.644-4.992.644-1.578 1.578-2.963 2.867-4.058.773-.645 1.61-1.16 2.609-1.353 1.191-.226 2.222.064 2.963 1.03.225.258.29.194.45-.032 3.254-4.863 7.377-8.76 12.562-11.402 5.09-2.576 10.403-3.607 15.944-2.415 6.441 1.385 11.112 5.185 14.204 11.015 2.898 5.476 3.575 11.434 2.737 17.65-.29 2.255-.837 4.445-1.578 6.603-.097.322-.064.419.258.516 1.127.418 1.739 1.32 1.997 2.48.354 1.45.16 2.898-.29 4.348a10.63 10.63 0 01-3.06 4.831c-.805.709-1.675 1.256-2.706 1.45-1.16.225-2.19-.033-2.93-.999-.226-.29-.323-.322-.613 0-2.512 2.835-5.378 5.218-8.696 6.99-4.863 2.64-10.017 3.865-15.428 3.027-8.084-.29-12.53-5.282-15.814-11.95a28.021 28.021 0 01-1.289-3.06c-1.578-4.637-1.803-9.5-1.03-14.525.16-.773.322-1.579.483-2.416zm19.1 14.333c-3.254-1.61-6.474-3.221-9.728-4.864-.386-.193-.45-.096-.58.29a10.608 10.608 0 00-.128 5.218c1.127 4.735 5.25 8.374 10.21 8.89 3.994.418 7.408-.773 10.05-4.09.257-.355.192-.42-.13-.58a905.454 905.454 0 00-9.695-4.864zM9.405 46.96c3.189 1.578 7.086.225 8.729-3.093 1.674-3.317.45-7.279-2.77-8.857-3.221-1.61-7.118-.225-8.761 3.092-1.643 3.318-.419 7.28 2.802 8.858zm24.285-2.803c-3.188-1.578-7.086-.193-8.728 3.092-1.675 3.318-.419 7.28 2.77 8.858 3.22 1.61 7.086.225 8.76-3.092 1.643-3.318.387-7.247-2.802-8.858zm6.217-.58c.129-.16.032-.257-.097-.386-1.61-1.288-3.188-2.609-4.799-3.897-.193-.161-.354-.161-.483.096a1.77 1.77 0 01-.226.29c-.16.194-.193.355.033.548 1.481 1.192 2.963 2.416 4.477 3.64.547.418.644.418 1.095-.29zM18.843 31.437c-.032 0-.064-.032-.096-.032-2.03-.516-4.09-1.031-6.12-1.546-.161-.032-.258.032-.29.16-.032.13-.064.29-.129.452-.096.29-.032.45.29.515 1.868.45 3.736.934 5.572 1.385.612.161.934-.129.902-.773 0-.097-.032-.161-.129-.161z"
        fill="#F06924"
      />
      <path
        d="M9.406 46.96c-3.221-1.61-4.445-5.54-2.803-8.857 1.643-3.318 5.54-4.702 8.761-3.092 3.189 1.61 4.413 5.54 2.77 8.857-1.643 3.318-5.54 4.703-8.728 3.093zm3.06-5.926a1.796 1.796 0 00-2.384.837c-.451.902-.097 1.997.773 2.416.87.419 1.932.065 2.383-.837.42-.902.097-1.997-.773-2.416zM33.691 44.158c3.22 1.61 4.445 5.54 2.802 8.858-1.643 3.317-5.54 4.702-8.76 3.092-3.19-1.61-4.445-5.54-2.77-8.857 1.642-3.286 5.54-4.67 8.728-3.093zm-2.899 6.023a1.796 1.796 0 00-2.383.838c-.451.902-.097 1.997.773 2.416.87.418 1.932.064 2.383-.838.451-.902.097-1.997-.773-2.416z"
        fill="#F06924"
      />
      <path
        d="M39.907 43.579c-.418.708-.547.708-1.127.257-1.482-1.224-2.963-2.415-4.477-3.64-.258-.192-.225-.321-.032-.547.064-.096.161-.193.225-.29.13-.225.29-.257.483-.096 1.61 1.32 3.19 2.609 4.8 3.897.16.161.257.258.128.419zM18.843 31.436c.096.032.128.064.128.193.033.644-.29.934-.901.773a351.658 351.658 0 00-5.572-1.385c-.322-.096-.387-.225-.29-.515.064-.129.064-.29.128-.451.033-.161.13-.225.29-.161 2.03.515 4.09 1.03 6.12 1.546.032-.032.065-.032.097 0z"
        fill="#3B3936"
      />
      <path
        d="M12.466 41.034c.87.419 1.224 1.514.773 2.416-.45.902-1.514 1.288-2.384.837-.87-.419-1.223-1.514-.773-2.415.42-.902 1.514-1.289 2.384-.838zM30.792 50.182c.87.418 1.224 1.513.773 2.415-.45.902-1.514 1.289-2.383.838-.87-.419-1.224-1.514-.773-2.416.418-.902 1.514-1.288 2.383-.837z"
        fill="#F06924"
      />
      <path
        d="M40.455 8.052c23.995-1.835 24.575 38.651 18.68 50.44-16.78 33.625-41.806 34.946-48.602 34.527a2.228 2.228 0 01-2.062-1.9c-1.32-7.86 4.67-13.496 4.67-13.496 7.892 1.192 17.619-2.834 24.125-10.017 6.506-7.182 4.316-17.779 4.316-17.779-7.827-11.112-12.819-27.216-12.819-27.216S16.202 35.752.483 33.723c0 0-2.222-2.61-5.765.16-2.222 2.03-3.64 4.188-3.51 9.051.29 1.353 1.288 3.544 4.283 2.738 0 0-1.868 10.21 1.256 18.746l-5.378 3.35c-.548.322-1.224.225-1.61-.258-2.674-3.35-11.242-16.91.965-41.356-.032-.065 30.889-43.707 49.73-18.102z"
        fill="#3B3936"
      />
      <path
        d="M7.698 42.097a.845.845 0 01-.419-.515.911.911 0 01.58-1.095c2.126-.709 6.668-.902 8.761 3.35a.896.896 0 01-.387 1.159c-.418.225-.934.064-1.127-.354-1.997-4.027-6.57-2.577-6.764-2.513-.225.065-.45.065-.644-.032zM32.95 54.69a.784.784 0 01-.42-.482c-.064-.194-1.674-4.735-6.055-3.898-.45.097-.901-.225-.966-.708-.064-.483.258-.934.709-.999 4.67-.87 7.214 2.899 7.955 4.992.161.451-.096.935-.547 1.128-.226.064-.483.064-.677-.032z"
        fill="#CC4D27"
      />
      <path
        d="M36.191 124.469l-16.69-9.969 1.5-5 14.174 8.378 1.016 6.591z"
        fill="#EF6623"
      />
      <path
        d="M31.601 119.42l21.16-13.146 2.574-8.553-3.614-9.48 5.045-1.053 1.83 9.803 6.125-.598 12.185-7.11 2.82 2.5-10.153 6.83 12.652-1.987 1.418 4.389-12.525 5.297 8.715-.494.126 3.311-7.29.899-10.966 6.517-7.112-2.849-17.516 10.374c-1.407.849-3.247.238-3.945-1.293l-1.529-3.357z"
        fill="#EF6623"
      />
      <path
        d="M41.84 111.217l-20.485-9.147s-3.414-4.026-7.182-6.023L8.73 93.373l-1.9.58c-6.346 1.9-12.916-1.61-14.881-7.955l-.805-2.642-2.094-.87c-3.8-1.706-5.637-1.867-9.824-2.222l-1.997-.16-5.797-14.43-17.49 11.595 14.784 15.879-.773 3.51-20.452 42.581 20.324 13.044-.033.065 5.637 3.639 17.554 4.96 20.774-45.639 2.61-.709 19.743 11.08 7.73-14.462z"
        fill="#316AF7"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;