import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const Share = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M22 3.437 9.218 10.52M11.698 20.77 22 3.439H2l7.218 7.083 2.48 10.25Z"
      stroke={palette.surface}
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </Svg>
);

export default Share;
