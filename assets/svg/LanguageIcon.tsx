import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LanguageIcon = ({ size = 24 }: { size?: number }) => (
    <Svg
      data-name="Layer 1"
      viewBox="0 0 52 52"
      width={size}
      height={size}
    >
      <Path d="M39 18.67h-3.58l-4.2 11.12a29 29 0 01-10.62-4.88 28.76 28.76 0 007.11-14.49h5.21a2 2 0 000-4H19.67V2a2 2 0 10-4 0v4.42H2.41a2 2 0 000 4h5.22a28.73 28.73 0 007.1 14.49A29.51 29.51 0 013.27 30a2 2 0 00.43 4 1.61 1.61 0 00.44-.05 32.56 32.56 0 0013.53-6.25 32 32 0 0012.13 5.9L22.83 52H28l2.7-7.76h12.94L46.37 52h5.22zm-15.3-8.25a23.76 23.76 0 01-6 11.86 23.71 23.71 0 01-6-11.86zm8.68 29.15l4.83-13.83L42 39.57z" />
    </Svg>
  
);
export default LanguageIcon;
