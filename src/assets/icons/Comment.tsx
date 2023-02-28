import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const Comment = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M20.656 17.445a9.993 9.993 0 1 0-3.59 3.615L22 22.437l-1.344-4.992Z"
      stroke={palette.surface}
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </Svg>
);

export default Comment;
