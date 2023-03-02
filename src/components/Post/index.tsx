import React, { memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PostState } from 'store/Posts';
import PostContent from './Content';
import PostFooter from './Footer';
import PostHeader from './Header';

interface PostTypes {
  post: PostState;
}

const Post: React.FC<PostTypes> = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader user={post.user} />
      <PostContent post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },
});

export default memo(Post);
