import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PostState } from 'store/Posts';
import { palette, spacing } from 'theme';
import PostFooterAction from './Action';
import CommentInput from './CommentInput';
import PostFooterContent from './Content';
import TimeText from './TimeText';

interface PostFooterTypes {
  item: PostState;
}

const PostFooter: React.FC<PostFooterTypes> = ({ item }) => {
  const [comment, setComment] = useState<string>('');
  return (
    <View style={styles.container}>
      <PostFooterAction />
      <PostFooterContent
        username={item.user.username}
        description={item.description}
        likeCount={item.likeCount}
        commentCount={item.commentCount}
      />
      <CommentInput value={comment} onChangeText={setComment} />
      <TimeText time={new Date(item.createdAt)} />
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
