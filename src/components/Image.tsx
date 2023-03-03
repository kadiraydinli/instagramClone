import React, { memo, useCallback, useMemo, useState } from 'react';
import { LayoutChangeEvent, StyleProp } from 'react-native';
import FastImage, {
  ImageStyle,
  Priority,
  ResizeMode,
} from 'react-native-fast-image';
import LottieAnimation from './LottieAnimation';

interface ImageTypes {
  url: string;
  loaderForSize?: number;
  priority?: Priority;
  resizeMode?: ResizeMode;
  style?: StyleProp<ImageStyle>;
}

const Image: React.FC<ImageTypes> = ({
  url,
  priority,
  loaderForSize,
  resizeMode,
  style,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [size, setSize] = useState<number>(0);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    const height = e.nativeEvent.layout.height;
    setSize(height / (width / height));
  }, []);

  const loaderSize = useMemo(
    () => (loaderForSize || 0) / 1.5 || size,
    [loaderForSize, size],
  );

  return (
    <FastImage
      onLayout={onLayout}
      style={style}
      source={{
        uri: url,
        priority: priority || FastImage.priority.high,
        cache: 'immutable',
      }}
      onLoadStart={() => setLoading(true)}
      onLoad={() => setLoading(false)}
      resizeMode={resizeMode || undefined}>
      {loading && (
        <LottieAnimation
          animation="loader"
          style={{
            width: loaderSize,
            height: loaderSize,
          }}
        />
      )}
    </FastImage>
  );
};

export default memo(Image);
