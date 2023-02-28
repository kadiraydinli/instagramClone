import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';
import { palette } from 'theme';

const Reels = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M15.24 14.327a.546.546 0 0 1 0 .93L9.78 18.51c-.347.206-.78-.052-.78-.465v-6.508c0-.414.433-.672.78-.465l5.46 3.254Z"
      fill={palette.surface}
    />
    <Path d="m6 2 4 6M13 2l4 6" stroke={palette.surface} strokeWidth={1.8} />
    <Rect
      x={1.9}
      y={1.9}
      width={20.2}
      height={20.2}
      rx={5.1}
      stroke={palette.surface}
      strokeWidth={1.8}
    />
    <Path d="M2 8h20" stroke={palette.surface} strokeWidth={1.8} />
  </Svg>
);

export default Reels;
