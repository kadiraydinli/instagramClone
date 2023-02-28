import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
import { palette } from 'theme';

const SearchSelected = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle
      cx={10}
      cy={10}
      r={7.75}
      stroke={palette.surface}
      strokeWidth={2.5}
    />
    <Path
      d="m22 22-6-6"
      stroke={palette.surface}
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default SearchSelected;
