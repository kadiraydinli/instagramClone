import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const SearchBarX = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8Zm-2.769-4.58a.655.655 0 0 1-.455-1.114l2.299-2.298L4.776 5.71a.641.641 0 0 1 .455-1.098c.189 0 .338.063.455.188l2.306 2.298 2.33-2.306a.602.602 0 0 1 .447-.196c.353 0 .643.29.643.643 0 .18-.055.322-.189.463L8.918 8.008l2.298 2.29a.646.646 0 0 1 .188.463c0 .36-.29.659-.651.659a.673.673 0 0 1-.463-.197L7.992 8.925 5.71 11.223a.663.663 0 0 1-.479.197Z"
      fill={palette.surface}
      fillOpacity={0.6}
    />
  </Svg>
);

export default SearchBarX;
