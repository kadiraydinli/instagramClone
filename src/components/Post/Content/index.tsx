import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import Video from 'react-native-video';
import { PostState } from 'store/Posts';
import { Image } from 'components';
import { Media } from 'store/types';
import { palette } from 'theme';
import Pagination from './Pagination';
import ToggleSound from './ToggleSound';
import { useAppDispatch, useAppSelector } from 'store/store';
import { setVideoVolumeLevel } from 'store/UI';

interface PostContentTypes {
  post: PostState;
}

const WIDTH = Dimensions.get('window').width;

const PostContent: React.FC<PostContentTypes> = ({ post }) => {
  const dispatch = useAppDispatch();
  const viewablePostID = useAppSelector(state => state.ui.viewablePostID);
  const videoVolumeLevel = useAppSelector(state => state.ui.videoVolumeLevel);
  const [shownMediaIndex, setShownMediaIndex] = useState<number>(0);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const shownItemIndex = viewableItems[0]?.index;
      setShownMediaIndex(shownItemIndex || 0);
    },
    [],
  );

  const onToggleSound = useCallback((open: boolean) => {
    dispatch(setVideoVolumeLevel(open ? 1 : 0));
  }, []);

  const onContentPress = useCallback(() => {
    onToggleSound(true);
  }, []);

  const media: Media[] = useMemo(() => post.media, [post]);

  return (
    <View style={styles.container}>
      <FlatList
        data={media}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
          waitForInteraction: true,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onContentPress}
            style={styles.item}>
            {item.type === 'image' && (
              <Image
                url={item.url}
                style={{ ...StyleSheet.absoluteFillObject }}
              />
            )}

            {item.type === 'video' && (
              <>
                <Video
                  repeat
                  paused={post.id !== viewablePostID}
                  resizeMode="cover"
                  volume={videoVolumeLevel}
                  source={{ uri: item.url }}
                  style={{ ...StyleSheet.absoluteFillObject }}
                />
                <ToggleSound
                  volumeLevel={videoVolumeLevel}
                  onToggle={onToggleSound}
                />
              </>
            )}
          </TouchableOpacity>
        )}
      />
      <Pagination dataLength={media.length} activeIndex={shownMediaIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    zIndex: 1,
  },
  item: {
    width: WIDTH,
    height: 200,
    backgroundColor: palette.gray3,
  },
});

export default memo(PostContent);
