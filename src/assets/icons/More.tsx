import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
import { palette } from 'theme';

const More = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={6.5} cy={11.5} r={1.5} fill={palette.surface} />
    <Circle cx={12} cy={11.5} r={1.5} fill={palette.surface} />
    <Circle cx={17.5} cy={11.5} r={1.5} fill={palette.surface} />
  </Svg>
);

export default More;
