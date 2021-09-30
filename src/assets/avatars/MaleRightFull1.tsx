import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 133 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M137.72 198.359l-7.061 3.792 13.174 27.198 14.972 24.909 7.028-3.792-14.775-24.549-13.338-27.558zM33.768 42.136l47.138-25.465 9.447 21.347 4.675-7.061 12.291 22.752-9.676 1.209 8.826 20.594-9.774 5.296 7.911 16.018-.621 14.22-10.755-8.009-9.937-15.005-12.978 6.996-12.716-19.287-5.198 7.584-13.108-19.058 9.218-1.536-14.743-20.595z"
        fill="#EF6623"
      />
      <path
        d="M65.869 74.957l25.465-13.73s4.282 7.323 1.406 10.592c-2.877 3.269-15.103 9.545-20.006 9.415-4.871-.131-6.865-6.277-6.865-6.277z"
        fill="#fff"
      />
      <path
        d="M82.867 37.2L74.76 39.49l-.588-1.961 8.107-2.322.588 1.995zM50.538 55.115l-1.308-1.602 6.473-5.427 1.274 1.602-6.44 5.427z"
        fill="#3B3936"
      />
      <path
        d="M155.864 150.6l-47.008 25.367-24.91-52.891-5.458-6.081 14.743-13.958 10.755 8.009.621-14.22 18.633-3.988 2.092 7.911 30.532 49.851zM147.691 68.485l-18.11 33.376-6.178-9.056 16.214-26.576 8.074 2.256zM147.691 68.484l-12.847-37.429 3.498-6.538-4.74-11.768.065-7.29-3.105-.36-.589 8.598L126.541.62l-4.25.72.327 12.715-5.165-10.95-2.68 2.386 5.165 13.043-.197 6.08-9.381.327.359 5.1 9.284-2.125 7.682 3.857 11.932 34.455 8.074 2.255z"
        fill="#EF6623"
      />
      <path
        d="M45.144 123.86l37.822 3.171-4.185-10.133-31.087-1.046-2.55 8.008zM45.144 123.86L20.89 92.577l-7.388-.654-7.225-10.428-6.145-3.956 1.405-2.81 7.519 4.249L0 68.942l2.942-3.17 10.46 7.256-6.341-10.33 3.465-.947 8.042 11.474 5.23 3.203 5.426-7.682 4.054 3.106-6.865 6.603-1.013 8.532 22.261 28.865-2.517 8.008z"
        fill="#EF6623"
      />
      <path
        d="M155.831 150.6l-46.975 25.367 16.084 37.266 22.948-12.389c-1.046-3.89-1.929-9.644-1.929-9.644l3.073-1.667s4.315 3.89 6.995 6.898l22.458-12.128-22.654-33.703z"
        fill="#BABABA"
      />
      <path
        d="M211.926 217.385l-22.327-24.191-1.307-1.667-10.886-13.729-2.615-3.302-1.373-1.765-17.554-22.164-17.391 9.382-29.617 15.985 10.036 28.996.719 2.125.818 2.353 6.08 17.783.032.066 8.336 31.676-1.569 4.119 2.942.948c-.196-5.754 1.569-12.422 8.859-17.358 9.447-6.407 17.587-.981 22.556 4.315l.425-.523-3.858-3.335-7.355-17.423-3.498-6.473s-2.745-15.919-4.151-19.156c-1.406-3.236-2.844-12.258-2.844-12.258l3.073-1.667s6.766 6.145 8.695 9.087c1.929 2.942 13.73 13.991 13.73 13.991l3.498 6.473 10.526 15.691.686 5.067 1.144-.131c-1.732-7.061-1.929-16.999 8.728-21.412 7.944-3.301 14.384-1.275 19.058 1.929l.719-2.55-4.315-.882z"
        fill="#0F3945"
      />
      <path
        d="M115.002 92.282l-10.396 4.544-.49 14.416-10.886-8.205-11.049 7.192-4.543 3.53-13.044-.424 1.733 18.731 18.927-2.812 1.896 1.112 6.178 13.958 13.142 35.37 3.367-1.209 31.61-13.599 15.561-13.403 2.124-1.83-21.738-30.729-7.486-10.918-.262-2.844 12.946-16.05-12.913-12.16-8.761 13.434-5.916 1.897z"
        fill="#05496C"
      />
      <path
        d="M33.768 42.137l47.105-25.433 9.513 21.412.915-1.406C89.144 3.138 72.113 4.903 72.113 4.903c1.177 2.518.392 6.015.392 6.015C65.542 1.21 57.63 1.013 57.63 1.013c1.242 2.093.49 4.152.49 4.152C54.036.49 49.133.033 47.956 0a.645.645 0 00-.457.196c-2.518 3.138-2.42 14.94-2.42 14.94-1.928-1.7-2.32-4.316-2.32-4.316-6.67 5.427-6.31 17.652-6.31 17.652-1.47.49-3.17-2.386-3.17-2.386s-7.16 5.067-.818 19.974c4.25 9.97 10.984 15.004 14.45 16.965l1.568-.261-14.71-20.627z"
        fill="#3B3936"
      />
      <path
        d="M59.102 63.777c-.196.098-.458.13-.72.065a.972.972 0 01-.62-1.176c.686-2.321 3.334-6.473 8.434-5.688.49.065.85.555.817 1.078a.89.89 0 01-1.014.785c-4.805-.752-6.374 4.217-6.44 4.446-.097.196-.26.36-.457.49zM85.973 49.263a.987.987 0 01-.687.066c-.229-.066-5.23-1.471-7.224 2.942a.884.884 0 01-1.21.425c-.457-.23-.654-.785-.457-1.275 2.124-4.675 7.06-4.61 9.382-3.923.49.13.784.654.653 1.177a.924.924 0 01-.457.588z"
        fill="#CC4D27"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;