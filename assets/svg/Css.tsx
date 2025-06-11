import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CssIcon = ({ size = 24 }: { size?: number }) => (


    <Svg viewBox="0 0 40 40" width={size} height={size}>
      <Path d="M32.34 6L30.1 31.2 20 34 9.9 31.2 7.66 6zM13.22 22l.43 4.86L20 28.65l6.33-1.75 1.4-15.75H12.25l.28 3.09h11.81l-.28 3.17H12.81l.27 3.09H23.8l-.36 4-3.44.94-3.45-.93-.23-2.51z" />
    </Svg>

);
export default CssIcon;
