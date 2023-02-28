import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const Heart = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      d="M16.792 4.34A4.989 4.989 0 0 1 21.5 9.56c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.31-2.143-1.823-4.303-3.752C5.141 14.509 2.5 12.604 2.5 9.559A4.989 4.989 0 0 1 7.208 4.34a4.21 4.21 0 0 1 3.675 1.94c.84 1.176.98 1.764 1.12 1.764.14 0 .278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938Zm0-2a6.04 6.04 0 0 0-4.797 2.128A6.052 6.052 0 0 0 7.208 2.34 6.985 6.985 0 0 0 .5 9.559c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.993 44.993 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.257 45.257 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.52.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
      fill={palette.surface}
    />
  </Svg>
);

export default Heart;
