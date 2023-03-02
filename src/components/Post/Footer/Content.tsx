import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextButton } from 'components';
import { palette, spacing } from 'theme';

interface PostFooterContentTypes {
  username: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

const PostFooterContent: React.FC<PostFooterContentTypes> = ({
  username,
  description,
  likeCount,
  commentCount,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.likeText}>{likeCount} likes</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <Text style={styles.contentText}>
          <Text onPress={() => {}} style={styles.usernameText}>
            {username}
          </Text>
          {` ${description}`}
        </Text>
      </TouchableOpacity>
      <TextButton
        title={`View all ${commentCount} comments`}
        color={palette.gray2}
        onPress={() => {}}
        style={{ marginVertical: spacing.tiny }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.extraSmall,
  },
  likeText: {
    fontSize: 14,
    color: palette.surface,
    fontWeight: '600',
  },
  contentText: {
    fontSize: 14,
    color: palette.surface,
    marginTop: spacing.tiny,
  },
  usernameText: {
    fontSize: 14,
    color: palette.surface,
    fontWeight: '600',
  },
});

export default PostFooterContent;
