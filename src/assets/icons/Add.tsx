import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
import { palette } from 'theme';

const Add = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect
      x={2}
      y={2}
      width={20}
      height={20}
      rx={5}
      stroke={palette.black}
      strokeWidth={1.8}
    />
    <Path
      stroke={palette.black}
      strokeWidth={1.8}
      strokeLinecap="round"
      d="M12.1 6.9v10.2M6.9 11.8h10.2"
    />
  </Svg>
);

export default Add;
