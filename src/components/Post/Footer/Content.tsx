import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextButton } from 'components';
import { palette, spacing } from 'theme';

interface PostFooterContentTypes {}

const PostFooterContent: React.FC<PostFooterContentTypes> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.likeText}>1234 likes</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <Text style={styles.contentText}>
          <Text onPress={() => {}} style={styles.usernameText}>
            instagram
          </Text>
          {'  '}Hello World
        </Text>
      </TouchableOpacity>
      <TextButton
        title="View all 10 comments"
        color={palette.gray2}
        onPress={() => {}}
        style={{ marginVertical: spacing.tiny }}
      />
    </View>
  );
};

export default PostFooterContent;

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
