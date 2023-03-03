import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import { PostState } from 'store/Posts';
import { Image, Video } from 'components';
import { Media } from 'store/types';
import { palette } from 'theme';
import Pagination from './Pagination';
import { useAppSelector } from 'store/store';

interface PostContentTypes {
  post: PostState;
}

const WIDTH = Dimensions.get('window').width;
const HEIGHT = 200;

const PostContent: React.FC<PostContentTypes> = ({ post }) => {
  const viewablePostID = useAppSelector(state => state.ui.viewablePostID);
  const [shownMediaIndex, setShownMediaIndex] = useState<number>(0);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      viewableItems.forEach(item => {
        if (item.item) {
          const shownItemIndex = item.index;
          setShownMediaIndex(shownItemIndex || 0);
        }
      });
    },
    [],
  );

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
          <View style={styles.item}>
            {item.type === 'image' && (
              <Image
                url={item.url}
                style={{ ...StyleSheet.absoluteFillObject }}
              />
            )}

            {item.type === 'video' && (
              <Video
                repeat
                showVolumeToggle
                paused={post.id !== viewablePostID}
                url={item.url}
                style={{ ...StyleSheet.absoluteFillObject }}
              />
            )}
          </View>
        )}
      />
      <Pagination dataLength={media.length} activeIndex={shownMediaIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT,
    zIndex: 1,
  },
  item: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: palette.gray3,
  },
});

export default PostContent;
