import React, { memo } from 'react';
import { StyleProp } from 'react-native';
import FastImage, {
  ImageStyle,
  Priority,
  ResizeMode,
} from 'react-native-fast-image';

interface ImageTypes {
  url: string;
  priority?: Priority;
  resizeMode?: ResizeMode;
  style?: StyleProp<ImageStyle>;
}

const Image: React.FC<ImageTypes> = ({ url, priority, resizeMode, style }) => {
  return (
    <FastImage
      style={style}
      source={{
        uri: url,
        priority: priority || FastImage.priority.high,
      }}
      resizeMode={resizeMode || undefined}
    />
  );
};

export default memo(Image);
