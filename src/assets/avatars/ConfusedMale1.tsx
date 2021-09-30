import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 124 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M19.148 13.665h75.276l-2.548 31.578 10.521-5.426v35.087l-12.753-4.78-2.878 30.3h-15.63l-.892 24.264-10.268 16.564-7.96-16.508-2.245-24.32H29.037l-2.87-31.262-11.483 5.742-3.51-31.255 12.438 4.141-4.464-34.125z"
          fill="#F16522"
        />
        <path
          d="M40.834 68.532c6.168 0 11.167-5 11.167-11.167s-5-11.167-11.167-11.167-11.167 5-11.167 11.167 5 11.167 11.167 11.167z"
          fill="#fff"
        />
        <path
          d="M48.025 62.266a3.355 3.355 0 11-3.348-3.194 3.264 3.264 0 013.348 3.194z"
          fill="#231F20"
        />
        <path
          d="M85.496 57.364a11.167 11.167 0 11-22.334-.014 11.167 11.167 0 0122.334.014z"
          fill="#fff"
        />
        <path
          d="M81.52 62.266a3.355 3.355 0 11-3.355-3.194 3.272 3.272 0 013.355 3.194zM71.605 34.2l-.597 2.772 11.569 2.49.597-2.772-11.569-2.49zM42.268 39.435l-11.603 2.327.558 2.78 11.602-2.327-.557-2.78z"
          fill="#231F20"
        />
        <path
          d="M97.764 221.955H22.635l4.513-79.242-2.702-10.767 27.577-7.201 7.952 16.508 10.276-16.571 25.702 7.264-2.702 10.767 4.513 79.242z"
          fill="#F16522"
        />
        <path
          d="M122.105 185.212l-21.533-51.63-9.826 11.195 19.891 41.579"
          fill="#F16522"
        />
        <path
          d="M79.412 344.699l-3.847-28.777v-9.827s-7.11-20.438-7.517-25.127c-.407-4.688-4.611-16.178-4.611-16.178h-4.808s-4.211 11.497-4.597 16.178c-.386 4.682-7.538 25.127-7.538 25.127v9.827l-3.011 29.366-31.044-.61.133-51.237 2.892-24.37.561-3.291.52-2.976 6.113-41.348h75.1l6.261 38.105.541 2.934 1.004 5.51 2.597 23.077 3.256 53.406-32.005.211z"
          fill="#173D7E"
        />
        <path
          d="M86.14 125.966l-15.897-1.278-.59.969a10.019 10.019 0 01-9.091 4.819 10.019 10.019 0 01-8.547-5.731L36.7 125.966l-13.083 2.653-4.73 3.902 7.51 23.401-1.818 18.249-7.363 50.675 4.998.737 48.156 4.155 28.215-5.972 3.825-.815-6.38-50.717-1.53-14.817 4.766 13.918 20.691-10.142-20.621-32.771-13.195-2.456z"
          fill="#80A6A6"
        />
        <path
          d="M118.443 176.431l-48.865 4.885-9.117-7.461-15.006-5.348-1.65 4.808 9.721 3.607-4.681 2.478-19.014 1.214-1.411 4.85 16.466-.014-15.834 7.187 1.537 5.861 18.066-3.467-10.261 5.91 2.225 3.713 10.331-2.752 15.82-2.66 6.03-8.38 50.584-3.292"
          fill="#F16522"
        />
        <path
          d="M32.005 195.662l-16.992-54.683 12.339-5.875 13.055 51.034"
          fill="#F16522"
        />
        <path
          d="M32.286 174.929l26.783-41.832-2.807-11.448.688-4.246 5.186-.779 4.127-3.074 9.28-16.642 4.983.814-7.096 14.859 13.3-11.202 4.633 3.917-10.907 14.809 9.749-6.717 2.393 3.608-8.205 8.886-7.931 12.388-10.163 1.839-25.893 46.029"
          fill="#F16522"
        />
        <path
          d="M56.719 118.856l.666-13.553 5.896.133-1.144 11.188-5.418 2.232z"
          fill="#F16522"
        />
        <path
          d="M18.888 132.5l-5.236 11.96 5.517 24.664 19.217-9.16-5.854-33.156-8.913 1.81-4.731 3.882z"
          fill="#6B9190"
        />
        <path
          d="M45.727 90.17s20.41-24.222 28.075-5.784c.021 0-7.285-8.058-28.075 5.784z"
          fill="#C64F26"
        />
        <path
          d="M97.231 3.587C74.996-6.415 28.377 7.68 28.377 7.68c-14.115-3.895-15.189 5.285-14.038 11.736l6.97 28.011 2.695.906-4.394-33.873h74.02L91.125 45.8l2.856-1.489 8.423-30.005a9.37 9.37 0 00-5.173-10.718z"
          fill="#3B3936"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h123.685v362.281H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;