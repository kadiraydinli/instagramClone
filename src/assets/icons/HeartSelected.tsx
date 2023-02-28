import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { palette } from 'theme';

const HeartSelected = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m12.314 6.183-.65-.63-.39-.377c-.22-.213-.428-.414-.633-.615-1.64-1.607-3.899-2.063-5.708-1.281-1.814.782-3.076 2.776-3.032 5.008.033 1.692.742 3.192 1.775 4.676 2.255 3.244 5.314 5.68 8.577 8.066 2.378-1.731 4.642-3.518 6.597-5.633l.661.611-.66-.61c1.658-1.796 3.024-3.611 3.582-5.859.588-2.367-.418-4.832-2.333-5.985l-7.786 2.63Zm0 0 .627-.653m-.627.653.627-.653m0 0c.144-.15.271-.289.39-.419.23-.249.432-.468.67-.684h.001M12.94 5.53l1.062-1.104m0 0c1.863-1.694 4.276-1.967 6.098-.872l-6.098.872ZM12.087 21.15Zm.09-.05h.006l.042.002c.02.003.056.008.103.023a.696.696 0 0 1 .193.1l-.345-.125Z"
      fill={palette.heartSelected}
      stroke={palette.heartSelected}
      strokeWidth={1.8}
    />
  </Svg>
);

export default HeartSelected;
