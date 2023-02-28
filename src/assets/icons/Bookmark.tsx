import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const Bookmark = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M3.9 21.078V1.9h16.2v19.178l-7.524-6.27a.9.9 0 0 0-1.152 0L3.9 21.079Z"
      stroke={palette.black}
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
  </Svg>
);

export default Bookmark;
