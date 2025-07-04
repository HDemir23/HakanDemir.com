import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VsCodeIcon = ({ size = 24 }: { size?: number }) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M90.767 127.126a7.968 7.968 0 006.35-.244l26.353-12.681a8 8 0 004.53-7.209V21.009a8 8 0 00-4.53-7.21L97.117 1.12a7.97 7.97 0 00-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 00-6.807.302l-7.048 6.411a5.335 5.335 0 00-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 00.006 7.887l7.048 6.411a5.327 5.327 0 006.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 002.743 1.793zm5.252-92.183L57.74 64l38.28 29.058V34.943z"
        clipRule="evenodd"
      />
    </Svg>
);
export default VsCodeIcon;
