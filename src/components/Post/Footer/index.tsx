import React, { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PostState } from 'store/Posts';
import { palette, spacing } from 'theme';
import PostFooterAction from './Action';
import CommentInput from './CommentInput';
import PostFooterContent from './Content';
import TimeText from './TimeText';

interface PostFooterTypes {
  post: PostState;
}

const PostFooter: React.FC<PostFooterTypes> = ({ post }) => {
  const [comment, setComment] = useState<string>('');
  return (
    <View style={styles.container}>
      <PostFooterAction />
      <PostFooterContent
        username={post.user.username}
        description={post.description}
        likeCount={post.likeCount}
        commentCount={post.commentCount}
      />
      <CommentInput value={comment} onChangeText={setComment} />
      <TimeText time={new Date(post.createdAt)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    paddingTop: spacing.small,
    paddingBottom: spacing.large,
    paddingHorizontal: spacing.extraSmall,
  },
});

export default memo(PostFooter);
