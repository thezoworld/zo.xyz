import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 135 236"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M93.819 202.157L0 204.825v-44.537l87.215-2.463c.513 2.497 3.302 8.826 3.302 8.826l-12.365 3.352 14.676 1.915c4.22 10.502.99 30.239.99 30.239z"
        fill="#914B29"
      />
      <path
        d="M36.706 62.105a12.756 12.756 0 01-1.052-.849 1.697 1.697 0 01-.27-.237c-.306-.272-.611-.51-.882-.782-.034-.034-.068-.068-.102-.068l-.034-.033c-.34-.34-.678-.68-1.017-1.053-.068-.068-.136-.136-.204-.238-.305-.34-.644-.713-.915-1.087-.034-.068-.102-.102-.136-.17-.271-.34-.542-.713-.78-1.086-.034-.068-.067-.102-.135-.17-.272-.408-.543-.781-.78-1.189-.068-.102-.102-.17-.17-.272-.237-.407-.474-.849-.712-1.256-.034-.034-.034-.102-.068-.136-.203-.407-.407-.815-.61-1.256-.034-.068-.068-.17-.102-.238-.203-.442-.373-.883-.576-1.325-.034-.101-.068-.203-.102-.271l-.509-1.427c-.237-.679-.406-1.392-.644-2.14-.068.035-.101.035-.101.069-1.492 1.324-3.29.713-4.544-.85-.271-.339-.373-1.086-.577-1.426l-1.729 3.6 7.528 32.603 4.78-.951 9.326-.713.983-13.483c-1.73-.645-4.205-2.31-5.866-3.566zM73.733 47.129c-.882.645-1.526-.543-2.544-.985-.305-.136-.678 1.257-.78 1.596-.915 3.26-2.305 6.283-4.306 9.034-2.882 3.973-6.51 6.962-11.19 8.456l-3.899 15.18 10.478 2.174 8.138-2.173 6.544-34.063c-.204.272-2.17.577-2.441.78z"
        fill="#302E2B"
      />
      <path
        d="M74.853 175.739l4.611 44.116 16.92 7.879 3.255 3.702-30.347 2.988 1.593-14.094-2-40.583"
        fill="#FF5800"
      />
      <path
        d="M68.884 179.747l-48.048-29.546 4.883-7.064 49.133 32.602"
        fill="#EF6523"
      />
      <path
        d="M86.21 162.325l23.025 37.867 18.649-.136 4.544 1.936-26.11 15.724-4.611-13.415-19.158-35.795"
        fill="#FF5800"
      />
      <path
        d="M83.94 166.706l-48.048-29.512 4.883-7.098 49.133 32.636"
        fill="#EF6523"
      />
      <path
        d="M100.588 207.629s6.002-1.46 12.682-8.49c3.967-1.97 12.376-3.77 17.733-.611l1.492 1.086-27.94 16.607-3.967-8.592z"
        fill="#DADADA"
      />
      <path
        d="M104.555 216.255l1.119 2.242 28.008-17.083-1.187-1.766-27.94 16.607z"
        fill="#EDECEC"
      />
      <path
        d="M68.782 223.149s6.002 1.393 15.124-1.834c4.441.034 12.749 2.208 16.106 7.472l.848 1.664-32.417 2.208.34-9.51z"
        fill="#DADADA"
      />
      <path
        d="M68.443 232.624v2.514l32.721-2.615-.305-2.106-32.416 2.207z"
        fill="#EDECEC"
      />
      <path
        d="M21.616 44.82c.373.916.882 1.698 1.696 2.309.881.68 1.865.849 2.916.407.339-.136.407-.135.508.238.95 3.362 2.374 6.453 4.408 9.271 2.95 4.076 6.68 7.132 11.495 8.695l-1.288 13.958 5.222 10.833 7.019-11.071 2.407-13.958a22.743 22.743 0 005.357-2.989 22.435 22.435 0 002.374-2.003c3.29-3.159 5.527-7.064 7.02-11.48.237-.712.44-1.426.643-2.173.068.034.102.034.102.068 1.526 1.358 3.39 1.053 4.68-.543 1.017-1.257 1.424-2.751 1.56-4.347a9.401 9.401 0 00-.713-4.517c-.373-.85-.882-1.63-1.661-2.174-.916-.679-1.9-.849-2.95-.373-.306.136-.34.034-.373-.238-.712-5.298-2.543-10.188-5.833-14.467-3.22-4.212-7.29-7.2-12.478-8.49-6.035-1.495-11.63-.306-16.683 3.226-4.78 3.328-7.866 7.912-9.799 13.346a28.578 28.578 0 00-1.458 6.045c-.034.306-.102.374-.44.34-1.154-.136-2.035.374-2.747 1.223-.916 1.052-1.39 2.309-1.594 3.667-.238 1.766-.102 3.532.61 5.197z"
        fill="#FF5D00"
      />
      <path
        d="M39.044 27.193c.068.748.17.816.848.646 1.763-.374 3.527-.781 5.324-1.155.305-.068.339-.17.271-.408a1.007 1.007 0 01-.068-.34c-.034-.237-.135-.339-.373-.27-1.899.407-3.797.848-5.73 1.256-.204.034-.34.068-.272.271zM62.035 25.835c-.102-.034-.136 0-.203.102-.306.51-.136.883.44 1.019 1.764.373 3.56.747 5.324 1.154.305.068.44-.034.475-.305.034-.136.067-.272.067-.408.034-.136 0-.237-.169-.271-1.933-.408-3.9-.85-5.832-1.257-.068-.034-.068-.034-.102-.034z"
        fill="#3B3936"
      />
      <path
        d="M49.861 149.827s11.563 13.89 26.652 17.524c1.662.408 4.476 12.022 4.578 13.755l14.716 20.92 14.546-6.827-16.682-32.025a13.962 13.962 0 00-4.646-5.196l-14.038-9.339-25.126 1.188z"
        fill="#4F4F4F"
      />
      <path
        d="M71.97 143.137H22.159l2.984-51.994-1.764-7.166 18.277-4.755 5.256 10.936 6.815-11.004 17.056 4.823-1.797 7.166 2.984 51.994z"
        fill="#EE6422"
      />
      <path
        d="M45.454 149.488l29.433 13.177a10.535 10.535 0 018.24 9.373l.406 4.891-.576 6.826-15.259 1.324a14.236 14.236 0 00-6.07-10.664l-32.11-17.49-9.936-8.558 25.872 1.121z"
        fill="#2D2D2D"
      />
      <path
        d="M47.828 150.54L73.8 164.091a10.535 10.535 0 018.24 9.373l3.73 42.044-16.886 3.6-2.306-32.569a14.236 14.236 0 00-6.07-10.664l-32.11-17.49-9.936-8.558 29.365.713z"
        fill="#4F4F4F"
      />
      <path
        d="M71.97 143.748H22.159l2.78-48.632 4.917-12.838 7.697-2.004 6.646 11.48c1.288 2.24 4.442 2.444 6.002.407l8.951-11.479 7.46 2.105 2.713 15.147 2.645 45.814z"
        fill="#D4D4D4"
      />
      <path
        d="M8.596 129.926l-7.426-2.955 18.65-41.942 5.425 6.487-16.649 38.41z"
        fill="#FF5D00"
      />
      <path
        d="M75.666 81.362l-11.325-1.325-10.546-.883-.407.645c-2.746 4.517-9.426 4.178-11.698-.645l-10.138.781-11.63 2.31-16.853 30.701 15.157 8.218 6.171-16.912-.983 7.641-4.985 37.867 35.23 3.328 21.261-4.483-4.137-37.901 1.153-10.018 4.883 15.758 14.852-8.898-16.005-26.184z"
        fill="#F2CB05"
      />
      <path
        d="M61.73 41.729c3.539 0 6.408-2.57 6.408-5.74 0-3.17-2.87-5.739-6.409-5.739-3.539 0-6.408 2.57-6.408 5.74 0 3.17 2.869 5.739 6.408 5.739z"
        fill="#fff"
      />
      <path
        d="M62.205 38.4c0 .918.847 1.63 1.932 1.63 1.052 0 1.933-.746 1.933-1.63 0-.882-.848-1.63-1.933-1.63s-1.932.748-1.932 1.63z"
        fill="#231F20"
      />
      <path
        d="M36.163 35.99c0 3.158 2.848 5.739 6.408 5.739 3.56 0 6.409-2.581 6.409-5.74 0-3.158-2.848-5.739-6.409-5.739-3.56 0-6.408 2.581-6.408 5.74z"
        fill="#fff"
      />
      <path
        d="M43.013 38.4c0 .918.848 1.63 1.933 1.63 1.051 0 1.933-.746 1.933-1.63 0-.882-.848-1.63-1.933-1.63-1.051 0-1.933.748-1.933 1.63z"
        fill="#231F20"
      />
      <path
        d="M52.506 50.117H42.028c-.339 0-.475.034-.373.442.848 3.871 3.29 6.316 6.917 7.607 4.51 1.63 9.63.306 12.648-3.192 1.085-1.257 1.831-2.751 2.136-4.381.068-.374.034-.476-.373-.476H52.506z"
        fill="#fff"
      />
      <path
        d="M22.328 94.81s.373-5.434 1.153-4.177c1.22 2.004 2.882 4.177 3.052 6.317.373 5.128 2-2.717 2.272-5.298.034-.17.034-.34.034-.51 0 0 4.374 7.336 5.764 11.479-.373-2.207-.407-6.384.712-11.988 1.73-8.694 1.73-9.34.848-11.92 0-.034 0-.034-.034-.068-.983-2.717-9.223-13.687-7.799-26.218 1.458-12.634 6.544-18.441 6.544-23.094l1.153-11.784s9.766-4.755 24.482-1.257c0 0 2.882 12.667 9.731 17.082 0 0 .102 5.23 0 7.234 0 0 2.578-4.856 3.222-5.468 0 0 4.238 1.597 1.695 12.634-.78 3.294-7.697 10.052-7.63 16.03.103 5.977 0 7.437 0 7.437l2.001 9.611 3.696 2.242 3.222 6.656c1.865-2.513 2.543-3.6 2.543-3.6v7.064s4.916-5.128 2.882-16.335c-2.034-11.208-5.493-7.71-5.595-14.4-.102-6.656 6.07-10.154 5.493-16.233-.576-6.08-3.56-10.732-3.56-10.732S82.82 11.062 61.119 3.93c0 0-.373-4.347-9.46-3.464-9.054.883-26.72 4.822-29.602 16.132-2.882 11.309-.983 9.577-1.458 13.516-.475 3.974-5.29 10.902-5.29 14.196 0 3.294 2.035 6.758 2.035 8.388s-2.882 6.453-2.815 8.593c.102 2.139 2.204 6.758 2.204 8.965 0 2.208-1.763 14.128 5.595 24.554z"
        fill="#3B3936"
      />
      <path
        d="M1 126.191l9.257 23.874-2.713 4.925 3.527 8.728-.102 5.434 2.34.237.542-6.452 2.475 9.713 3.256-.578-.17-9.509 3.832 8.117 2.068-1.8-3.832-9.679.204-4.551 7.12-.373-.237-3.77-7.053 1.698-5.798-2.751-8.85-25.81L1 126.191zM86.856 131.591l24.074 8.728 1.899 5.264 8.85 3.09 4.035 3.668 1.729-1.63-4.509-4.619 8.951 4.517 1.662-2.853-7.222-6.113 8.612 2.445v-2.751l-9.765-3.464-3.289-3.158 4.408-5.604-3.018-2.343-3.357 6.453-5.9 2.547-25.228-10.29-1.932 6.113z"
        fill="#FF5D00"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;