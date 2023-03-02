import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { BottomTabParamList } from 'navigation/BottomNavigator';
import { GridMediaView, HomeHeader, Post, SearchInput } from 'components';
import { palette } from 'theme';
import { fetchPosts } from 'store/Posts';
import { useAppDispatch, useAppSelector } from 'store/store';

type Props = NativeStackScreenProps<BottomTabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState<string>('');
  const [isSearchFocus, setIsSearchFocus] = useState<boolean>(false);

  const posts = useAppSelector(state => state.posts.items);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <SearchInput
        value={searchText}
        onChangeText={setSearchText}
        onFocus={setIsSearchFocus}
      />
      {isSearchFocus ? (
        <GridMediaView searchText={searchText} />
      ) : (
        <FlashList
          data={posts}
          keyExtractor={item => item?.id}
          renderItem={({ item }) => <Post item={item} />}
          estimatedItemSize={450}
        />
      )}
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
