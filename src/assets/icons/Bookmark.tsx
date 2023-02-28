import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const Bookmark = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="m20 21.437-8-7.56-8 7.56v-18h16v18Z"
      stroke={palette.surface}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Bookmark;
