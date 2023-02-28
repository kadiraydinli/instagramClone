import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const Heart = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m3.584 12.941 7.683 8.27a1 1 0 0 0 1.466 0l7.683-8.27c2.112-2.274 2.112-5.961 0-8.235-2.113-2.275-5.538-2.275-7.651 0l-.032.034a1 1 0 0 1-1.466 0l-.032-.034c-2.113-2.275-5.538-2.275-7.65 0-2.113 2.274-2.113 5.96 0 8.235Z"
      stroke={palette.surface}
      strokeWidth={2}
    />
  </Svg>
);

export default Heart;
