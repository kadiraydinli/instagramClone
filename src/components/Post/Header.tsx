import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton, ProfileImage } from 'components';
import { palette, spacing } from 'theme';

interface PostHeaderTypes {}

const PostHeader: React.FC<PostHeaderTypes> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContent}>
        <ProfileImage />
        <Text style={styles.username}>instagram</Text>
      </TouchableOpacity>
      <IconButton icon="more" onPress={() => {}} />
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.small,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    marginLeft: spacing.extraSmall,
    color: palette.surface,
  },
});
