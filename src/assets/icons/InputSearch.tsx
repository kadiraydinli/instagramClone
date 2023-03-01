import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const InputSearch = (props: SvgProps) => (
  <Svg width={15} height={15} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.75 6a5.75 5.75 0 1 0-2.25 4.562l3.152 3.15.084.073a.75.75 0 0 0 .976-1.133L10.562 9.5A5.725 5.725 0 0 0 11.75 6Zm-10 0a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z"
      fill={palette.surface}
      fillOpacity={0.6}
    />
  </Svg>
);

export default InputSearch;
