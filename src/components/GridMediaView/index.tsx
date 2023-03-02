import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from 'store/store';
import GridMedia from './GridMedia';
import { GRID_ITEM_SIZE } from './constants';

type GridMediaViewProps = {
  searchText: string;
};

const GridMediaView: React.FC<GridMediaViewProps> = ({ searchText }) => {
  const posts = useAppSelector(state => state.posts.items);

  const filteredMedia = useMemo(() => {
    const isTextInclude = (text: string): boolean => {
      return text.toLowerCase().includes(searchText.toLowerCase());
    };

    return posts
      .filter(post => {
        const name = isTextInclude(post.user.name);
        const username = isTextInclude(post.user.username);
        const description = isTextInclude(post.description);

        const isInclude = name || username || description;

        return isInclude;
      })
      .flatMap(item => item.media);
  }, [searchText]);

  return (
    <View style={styles.container}>
      <FlashList
        data={filteredMedia}
        keyExtractor={item => item?.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={GRID_ITEM_SIZE}
        renderItem={({ item }) => (
          <GridMedia type={item.type} url={item.url} onPress={() => {}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default GridMediaView;
