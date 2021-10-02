import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 360 640"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      ref={svgRef}
      {...props}
    >
      <g clipPath="url(#prefixssss__clip0)">
        <path fill="#fff" d="M0 0h360v640H0z" />
        <path
          d="M361.656 0H.166v474h361.49V0z"
          fill="url(#prefixssss__paint0_linear)"
        />
        <g opacity={0.4}>
          <path
            opacity={0.2}
            d="M339.352 102.915V92.219a.617.617 0 00-.117-.392c-.059-.09-.177-.15-.265-.12l-97.548 12.715c30.662-7.02 71.564-19.916 80.51-22.778.177-.06.294-.332.265-.603-.03-.271-.206-.452-.383-.392-14.625 4.128-70.211 8.196-98.372 10.064 29.838-4.43 63.944-12.655 83.483-17.717.176-.06.294-.301.264-.572-.029-.272-.176-.482-.382-.452-24.071 3.826-67.269 4.429-91.545 4.459 17.538-2.953 36.871-11.148 37.106-11.239.177-.06.265-.331.236-.572-.03-.271-.177-.452-.353-.422-11.477 1.386-24.13 2.08-37.548 2.08-65.268 0-131.565-16.482-132.213-16.663-.176-.03-.323.12-.382.392-.03.271.058.512.206.602 9.916 5.394 35.488 12.565 49.171 16.21L61.301 56.13c11.321.572-.177-.03 0 0 11.321.572-7.474.512-7.298.572 21.893 8.106 63.093 14.185 79.571 16.475-21.363-.362-82.364-8.889-82.982-8.979-.176-.03-.324.15-.353.392-.03.24.059.512.206.602 12.3 7.473 73.183 18.892 86.396 21.302-1.589.242-3.502.362-5.768.362-28.249 0-100.726-18.53-101.462-18.71-.176-.031-.323.12-.382.36-.06.242.029.513.176.633 8.21 6.298 54.674 19.495 77.126 25.611C67.247 87.097 3.657 71.098 2.951 70.917c-.088-.03-.206.03-.265.12-.088.091-.118.242-.118.392v9.25c0 .241.118.482.295.513l69.505 16.27c-5.062.904-10.83 1.356-17.244 1.356-25.042-.09-51.938-7.02-52.232-7.111-.088-.03 50.15 12.837-.265.12 47.612 6.89-.117.242-.117.392l52.614 213.67c0 .271 263.134 2.725 284.228 2.725V109.092a.767.767 0 00-.117-.392.376.376 0 00-.295-.12c-13.447 4.158-39.49 5.966-50.995 6.598l51.113-11.75c.147-.061.294-.272.294-.513zm-218.372 5.996c11.741 1.326 18.097 4.972 17.979 6.96-.088 1.537-4.178 3.194-11.682 3.194-2.178 0-4.443-.12-6.797-.392-11.742-1.325-18.098-4.971-17.98-6.96.088-1.536 4.179-3.193 11.682-3.193 2.178 0 4.473.12 6.798.391z"
            fill="url(#prefixssss__paint1_linear)"
          />
          <g opacity={0.4}>
            <path
              opacity={0.4}
              d="M309.097 21.725c2.178-.03 8.416-1.567 8.769 0 .324 1.567-25.601 6.81-46.493 14.402-20.893 7.593-42.551 1.296-28.338-2.35 14.183-3.676 24.306-3.676 32.722-9.702s22.335-2.26 33.34-2.35z"
              fill="url(#prefixssss__paint2_linear)"
            />
            <path
              opacity={0.4}
              d="M143.986 296.843c0 7.02 9.975 2.139 25.748 2.591 15.772.452 50.319-2.35 61.089 1.205 10.77 3.555 46.876-2.681 57.234 0 10.358 2.682 30.721 7.412 45.699 3.555 14.978-3.886 26.896 1.477 26.896-2.922s-23.806-5.695-38.019-4.399c-14.213 1.295-38.813-8.196-54.174-3.887-15.36 4.309-32.281 1.175-46.493-1.145-14.213-2.32-31.487 4.158-49.937 2.411-18.45-1.718-28.043-4.309-28.043 2.591z"
              fill="url(#prefixssss__paint3_linear)"
            />
            <path
              opacity={0.4}
              d="M55.795 276.023s35.341-2.591 47.259-2.591 47.641.874 62.237 1.295c14.595.422 29.19-1.295 34.575-1.295 5.385 0 26.514-.422 29.956 0 3.443.422-.382-3.435-30.338-2.591-29.956.873-43.404-6.9-49.171-6.9-5.768 0-21.129 5.604-25.748 6.026-4.62.422-5.003-6.026-13.831-6.026s-22.275 3.887-29.573 6.026c-7.327 2.199-36.047 6.809-25.366 6.056z"
              fill="url(#prefixssss__paint4_linear)"
            />
            <path
              opacity={0.4}
              d="M291.177 255.113c10.946-.904-10.358-.904-21.511-3.073-11.153-2.139-20.363-12.926-29.956-7.743-9.593 5.182-16.126-4.49-28.808-1.386-12.683 3.103-24.807-1.025-29.574 3.977-2.883 3.013-24.188 1.928-27.66 6.448-.03 0 128.975 2.501 137.509 1.777z"
              fill="url(#prefixssss__paint5_linear)"
            />
            <path
              opacity={0.4}
              d="M92.814 7.504H76.66c-5.826 0-10.77-6.298-18.42-7.352-7.622-1.055-10.77 3.465 17.302 10.997 28.073 7.533 38.843 6.117 44.698 0 5.797-6.086-19.362-3.645-27.425-3.645z"
              fill="url(#prefixssss__paint6_linear)"
            />
          </g>
        </g>
        <path
          fill="url(#prefixssss__pattern0)"
          d="M13.795 221.771h238.544v237.934H13.795z"
          opacity={0.2}
        />
        <path
          fill="url(#prefixssss__pattern1)"
          d="M31.449 239.728h203.232v202.02H31.449z"
          opacity={0.4}
        />
        <path
          d="M133.065 408.426c37.532 0 67.957-30.299 67.957-67.676s-30.425-67.677-67.957-67.677c-37.531 0-67.956 30.3-67.956 67.677 0 37.377 30.425 67.676 67.956 67.676z"
          fill="#FFFACA"
        />
        <path
          d="M217.293 387.735c36.624 6.639 50.691 2.513 87.315 11.515 5.479 2.822 41.056-3.99 57.384-5.016V577H.502V391.874l86.342 3.551c43.47 1.762 91.73-14.666 130.449-7.69z"
          fill="url(#prefixssss__paint7_linear)"
        />
        <path
          d="M36.927 431.622c-4.583 1.534-32.345 9.687-36.928 9.687v85.487h361.993V416.5c-43.652 1.534-133.705-12.413-173.412-7.362-24.793 3.142-54.47-2.207-70.511 1.758-6.875 3.031-76.56 17.658-81.142 20.726z"
          fill="url(#prefixssss__paint8_linear)"
        />
        <path
          opacity={0.4}
          d="M98.43 545.576l-16.68-31.575 3.155 31.575H98.43z"
          fill="#1D1D1B"
        />
        <path
          d="M338.664 79.92l-.15-1.047-9.242-9.876-2.254-4.677.602-1.234.262-.561 2.104-4.49 1.202-.523 1.841-.786 4.057-1.758 15.402-6.697h.113l3.343.411 5.823.749 2.592-1.085 1.69-3.845v306.9l5.297 57.064-5.297 27.724v82.189h-15.702l15.702-82.189v-84.788l-2.742-29.543-1.54-78.858 4.282-12.313-1.991-11.522-16.979-98.953c-.263-1.01-.564-1.646-.902-1.758-.15-.037-.263-.15-.413-.262-.113-.075-.15-.149-.226-.224-.075-.112-.15-.225-.225-.299l-.225-.337a8.042 8.042 0 01-.451-.823c-.188-.412-.413-.861-.601-1.347-.113-.299-.225-.635-.338-.972v-.001a23.388 23.388 0 01-.526-1.496c-.113-.299-.188-.636-.301-.935v-.038a32.09 32.09 0 01-.563-1.87c-.075-.262-.15-.562-.226-.786-.037-.15-.075-.262-.075-.374-.225-.786-.338-1.272-.338-1.272l-1.352-14.03-.601-6.135-1.052-7.332z"
          fill="#5A8C68"
        />
        <path
          opacity={0.4}
          d="M354.854 117.968l9.354 101.458-16.98-98.952c-.263-.972-.564-1.608-.902-1.758-.112-.037-.263-.15-.413-.262l-.225-.224a2.053 2.053 0 01-.226-.3l-.225-.336a8.24 8.24 0 01-.451-.823c-.188-.412-.413-.861-.601-1.347-.113-.3-.225-.636-.338-.973a23.388 23.388 0 01-.526-1.496c-.113-.3-.188-.636-.3-.936v-.037a31.185 31.185 0 01-.564-1.871c-.075-.261-.15-.561-.225-.785a1.308 1.308 0 01-.075-.374 28.331 28.331 0 01-.339-1.272l-1.352-14.03-.563-6.135-1.052-7.332-.15-1.048-9.242-9.465-2.254-4.676.564-1.235 10.593 7.782 8.115 16.648 3.268-1.085-1.653-6.622v-8.904l15.101-4.19 1.804-8.642v-.112l.901-4.303.827 4.116.263 1.347 1.991 9.95-10.444 4.228-2.554 11.074-1.127 32.922z"
          fill="#1D1D1B"
        />
        <path
          d="M.166 464.241s107.19-30.69 186.007-14.551c78.816 16.14 112.354 28.02 131.861 40.087 23.146 14.309 43.622 7.419 43.622 7.419V640H.166V464.241z"
          fill="url(#prefixssss__paint9_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefixssss__paint0_linear"
          x1={31.573}
          y1={494.206}
          x2={381.027}
          y2={-49.279}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.005} stopColor="#F5D928" />
          <stop offset={0.156} stopColor="#F6D129" />
          <stop offset={0.396} stopColor="#F8B92D" />
          <stop offset={0.695} stopColor="#FB9434" />
          <stop offset={1} stopColor="#FF663C" />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint1_linear"
          x1={203.817}
          y1={308.822}
          x2={203.817}
          y2={49.542}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint2_linear"
          x1={278.179}
          y1={39.731}
          x2={278.179}
          y2={20.651}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint3_linear"
          x1={143.976}
          y1={298.472}
          x2={360.634}
          y2={298.472}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint4_linear"
          x1={53.437}
          y1={270.041}
          x2={230.855}
          y2={270.041}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint5_linear"
          x1={153.64}
          y1={248.762}
          x2={294.202}
          y2={248.762}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint6_linear"
          x1={86.993}
          y1={16.281}
          x2={86.993}
          y2={0.009}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint7_linear"
          x1={445.32}
          y1={577.09}
          x2={445.32}
          y2={384.29}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.691} stopColor="#92CCB8" />
          <stop offset={0.741} stopColor="#96CBB3" stopOpacity={0.935} />
          <stop offset={0.798} stopColor="#A1C8A6" stopOpacity={0.861} />
          <stop offset={0.857} stopColor="#B3C28F" stopOpacity={0.784} />
          <stop offset={0.919} stopColor="#CDBB70" stopOpacity={0.705} />
          <stop offset={0.982} stopColor="#EEB148" stopOpacity={0.624} />
          <stop offset={1} stopColor="#F9AE3B" stopOpacity={0.6} />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint8_linear"
          x1={446.665}
          y1={526.753}
          x2={446.665}
          y2={408.654}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.715} stopColor="#79AA9F" />
          <stop offset={0.761} stopColor="#7EAA9B" stopOpacity={0.951} />
          <stop offset={0.813} stopColor="#8BAB91" stopOpacity={0.897} />
          <stop offset={0.867} stopColor="#A1AB80" stopOpacity={0.84} />
          <stop offset={0.922} stopColor="#C0AC67" stopOpacity={0.782} />
          <stop offset={0.979} stopColor="#E8AD48" stopOpacity={0.722} />
          <stop offset={1} stopColor="#F9AE3B" stopOpacity={0.7} />
        </linearGradient>
        <linearGradient
          id="prefixssss__paint9_linear"
          x1={177.665}
          y1={1245.13}
          x2={177.665}
          y2={447.984}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.063} stopColor="#F6FCFC" />
          <stop offset={0.165} stopColor="#DFF2F5" />
          <stop offset={0.292} stopColor="#B9E2E8" />
          <stop offset={0.439} stopColor="#84CDD7" />
          <stop offset={0.602} stopColor="#41B2C2" />
          <stop offset={0.742} stopColor="#0198AD" />
          <stop offset={0.764} stopColor="#0A9CB0" />
          <stop offset={0.8} stopColor="#24A6B8" />
          <stop offset={0.847} stopColor="#4DB7C5" />
          <stop offset={0.901} stopColor="#86CED8" />
          <stop offset={0.962} stopColor="#CEEBEF" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <pattern
          id="prefixssss__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefixssss__image0" transform="scale(.00157)" />
        </pattern>
        <pattern
          id="prefixssss__pattern1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefixssss__image1" transform="scale(.00185)" />
        </pattern>
        <clipPath id="prefixssss__clip0">
          <path fill="#fff" d="M0 0h360v640H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
