import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const More = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={palette.surface}
    />
  </Svg>
);

export default More;
