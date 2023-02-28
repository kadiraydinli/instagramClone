import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
import { palette } from 'theme';

const Search = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle
      cx={10}
      cy={10}
      r={8.1}
      stroke={palette.surface}
      strokeWidth={1.8}
    />
    <Path
      d="m22 22-6-6"
      stroke={palette.surface}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

export default Search;
