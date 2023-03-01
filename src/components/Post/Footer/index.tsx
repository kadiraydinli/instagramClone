import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { palette, spacing } from 'theme';
import PostFooterAction from './Action';
import CommentInput from './CommentInput';
import PostFooterContent from './Content';
import TimeText from './TimeText';

interface PostFooterTypes {}

const PostFooter: React.FC<PostFooterTypes> = () => {
  const [comment, setComment] = useState<string>('');
  return (
    <View style={styles.container}>
      <PostFooterAction />
      <PostFooterContent />
      <CommentInput value={comment} onChangeText={setComment} />
      <TimeText time={new Date('2023-01-01')} />
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    paddingTop: spacing.small,
    paddingBottom: spacing.large,
    paddingHorizontal: spacing.extraSmall,
  },
});
