import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PostState } from 'store/Posts';
import PostContent from './Content';
import PostFooter from './Footer';
import PostHeader from './Header';

interface PostTypes {
  item: PostState;
}

const Post: React.FC<PostTypes> = ({ item }) => {
  return (
    <View style={styles.container}>
      <PostHeader user={item.user} />
      <PostContent media={item.media} />
      <PostFooter item={item} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },
});
