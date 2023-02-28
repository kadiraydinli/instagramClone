import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
import { palette } from 'theme';

const Share = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M2.684 3.95H21.57l-9.443 16.356-2.766-9.069a.9.9 0 0 0-.203-.351L2.684 3.95Z"
        stroke={palette.black}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={palette.white} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Share;
