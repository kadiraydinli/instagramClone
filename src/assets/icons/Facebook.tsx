import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const Facebook = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      d="M15.5 0A1.5 1.5 0 0 1 17 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-4.309l.002-6.053h2.712V8.165h-2.712V6.954l.001-.104c.018-.707.241-1.194 1.182-1.246l.174-.005H14V3h-2.113l-.183.003C9.78 3.075 8.455 4.283 8.37 6.45l-.004.228v1.487H6v2.782h2.365L8.363 17H1.5A1.5 1.5 0 0 1 0 15.5v-14A1.5 1.5 0 0 1 1.5 0h14Z"
      fill={palette.facebook}
    />
  </Svg>
);

export default Facebook;
