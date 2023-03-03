import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Video } from 'components';
import { MediaType } from 'store/types';
import { palette } from 'theme';
import { GRID_ITEM_SIZE } from './constants';

type GridMediaProps = {
  type: MediaType;
  url: string;
  onPress: () => void;
};

const GridMedia: React.FC<GridMediaProps> = ({ type, url, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      {type === 'image' && (
        <Image
          url={url}
          loaderForSize={GRID_ITEM_SIZE}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
      )}
      {type === 'video' && (
        <Video url={url} repeat volume={0} loaderForSize={GRID_ITEM_SIZE} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: GRID_ITEM_SIZE,
    backgroundColor: palette.gray3,
    margin: 0.5,
  },
});

export default memo(GridMedia);
