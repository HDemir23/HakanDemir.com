import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackendIcon = ({ size = 24 }: { size?: number }) => (
    <Svg viewBox="0 0 256 256" width={size} height={size}>
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path
        d="M80 40c-64 0 0 88-64 88 64 0 0 88 64 88M176 40c64 0 0 88 64 88-64 0 0 88-64 88"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
);
export default BackendIcon;
