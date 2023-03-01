import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import Video from 'react-native-video';
import { Image } from 'components';
import { Media } from 'store/types';
import Pagination from './Pagination';

interface PostContentTypes {
  media: Media[];
}

const WIDTH = Dimensions.get('window').width;

const PostContent: React.FC<PostContentTypes> = ({ media }) => {
  const [shownMediaIndex, setShownMediaIndex] = useState<number>(0);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const shownItemIndex = viewableItems[0]?.index;
      setShownMediaIndex(shownItemIndex || 0);
    },
    [],
  );

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
          itemVisiblePercentThreshold: 40,
          waitForInteraction: true,
        }}
        renderItem={({ item }) => (
          <View style={{ width: WIDTH, height: 200 }}>
            {item.type === 'image' && (
              <Image
                url={item.url}
                style={{ ...StyleSheet.absoluteFillObject }}
              />
            )}

            {item.type === 'video' && (
              <Video
                repeat
                resizeMode="cover"
                source={{ uri: item.url }}
                style={{
                  ...StyleSheet.absoluteFillObject,
                }}
              />
            )}
          </View>
        )}
      />
      <Pagination dataLength={media.length} activeIndex={shownMediaIndex} />
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    zIndex: 1,
  },
});
