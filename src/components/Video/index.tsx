import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  ImageStyle,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import RNVideo from 'react-native-video';
import { LottieAnimation } from 'components';
import { useAppDispatch, useAppSelector } from 'store/store';
import { setVideoVolumeLevel } from 'store/UI';
import ToggleSound from './ToggleSound';

interface VideoTypes {
  url: string;
  repeat?: boolean;
  paused?: boolean;
  volume?: number;
  showVolumeToggle?: boolean;
  loaderForSize?: number;
  resizeMode?: 'cover' | 'stretch' | 'contain' | 'none' | undefined;
  videoStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<ImageStyle>;
}

const Video: React.FC<VideoTypes> = ({
  url,
  repeat,
  paused,
  volume,
  showVolumeToggle = false,
  resizeMode = 'cover',
  loaderForSize,
  videoStyle,
  style,
}) => {
  const dispatch = useAppDispatch();
  const videoVolumeLevel = useAppSelector(state => state.ui.videoVolumeLevel);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [size, setSize] = useState<number>(0);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    const height = e.nativeEvent.layout.height;
    setSize(height / (width / height));
  }, []);

  const onToggle = useCallback(
    (level: number) => {
      dispatch(setVideoVolumeLevel(level));
    },
    [videoVolumeLevel],
  );

  const onLoadStart = useCallback(() => {
    setLoading(true);
  }, []);

  const onLoad = useCallback(() => {
    setLoading(false);
    setError(false);
  }, []);

  const onError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  const onPress = useCallback(() => {
    if (showVolumeToggle && videoVolumeLevel === 0) {
      dispatch(setVideoVolumeLevel(1));
    }
  }, [showVolumeToggle, videoVolumeLevel]);

  const loaderSize = useMemo(
    () => (loaderForSize || 0) / 1.5 || size,
    [loaderForSize, size],
  );

  return (
    <TouchableOpacity
      activeOpacity={1}
      onLayout={onLayout}
      onPress={onPress}
      style={[styles.container, style]}>
      <RNVideo
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        onError={onError}
        repeat={repeat}
        paused={paused}
        volume={volume || (showVolumeToggle ? videoVolumeLevel : 0)}
        resizeMode={resizeMode}
        source={{
          uri: url,
        }}
        style={[{ ...StyleSheet.absoluteFillObject }, videoStyle]}
      />
      {error ? (
        <Text style={styles.errorText}>ERROR</Text>
      ) : loading ? (
        <LottieAnimation
          animation="loader"
          style={{
            width: loaderSize,
            height: loaderSize,
          }}
        />
      ) : (
        showVolumeToggle && <ToggleSound onToggle={onToggle} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    fontSize: 20,
  },
});

export default memo(Video);
