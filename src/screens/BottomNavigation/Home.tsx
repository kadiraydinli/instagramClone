import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { RefreshControl, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList, ViewToken } from '@shopify/flash-list';
import { BottomTabParamList } from 'navigation/BottomNavigator';
import { GridMediaView, HomeHeader, Post, SearchInput } from 'components';
import { fetchPosts } from 'store/Posts';
import { setViewablePostID } from 'store/UI';
import { useAppDispatch, useAppSelector } from 'store/store';
import { palette } from 'theme';

type Props = NativeStackScreenProps<BottomTabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const postsStatus = useAppSelector(state => state.posts.status);
  const postItems = useAppSelector(state => state.posts.items);

  const [searchText, setSearchText] = useState<string>('');
  const [isSearchFocus, setIsSearchFocus] = useState<boolean>(false);

  // Kullandığım mockAPI sağlayıcısının pagination özelliği olmadığı localde pagination özelliği geliştirdim.
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(true);

  // Pagination
  const posts = useMemo(() => {
    if (postItems.length) {
      const pageLimit = 3;
      const pageCount = Math.ceil(postItems.length / pageLimit);
      if (pageCount <= page) setLoadMore(false);
      return postItems.slice(0, pageLimit * page);
    }
  }, [postItems, page]);

  const getPosts = useCallback(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => getPosts(), []);

  const isLoading = postsStatus === 'loading';

  const searchList = useMemo(
    () => <GridMediaView searchText={searchText} />,
    [searchText],
  );

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      viewableItems.forEach(item => {
        if (item.item && item.isViewable) {
          dispatch(setViewablePostID(item.item.id));
        }
      });
    },
  ).current;

  const handleLoadMore = useCallback(() => {
    if (loadMore) setPage(page + 1);
  }, [page, loadMore]);

  const list = useMemo(
    () => (
      <FlashList
        data={posts}
        keyExtractor={item => item?.id}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getPosts} />
        }
        renderItem={({ item }) => <Post post={item} />}
        estimatedItemSize={450}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    ),
    [posts, isLoading],
  );

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <SearchInput
        value={searchText}
        onChangeText={setSearchText}
        onFocus={setIsSearchFocus}
      />
      {isSearchFocus ? searchList : list}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

export default HomeScreen;
