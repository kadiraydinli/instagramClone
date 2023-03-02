import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { Image } from 'components';
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
        <Image url={url} style={{ ...StyleSheet.absoluteFillObject }} />
      )}
      {type === 'video' && (
        <Video
          repeat
          volume={0}
          resizeMode="cover"
          source={{ uri: url }}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        />
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

export default GridMedia;
