import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PostContent from './Content';
import PostFooter from './Footer';
import PostHeader from './Header';

interface PostTypes {}

const Post: React.FC<PostTypes> = () => {
  return (
    <View style={styles.container}>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },
});
