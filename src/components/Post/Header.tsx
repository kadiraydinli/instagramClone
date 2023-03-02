import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton, ProfileImage } from 'components';
import { palette, spacing } from 'theme';
import { User } from 'store/User';

interface PostHeaderTypes {
  user: User;
}

const PostHeader: React.FC<PostHeaderTypes> = ({ user }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.leftContent}>
        <ProfileImage url={user.avatar} />
        <Text style={styles.username}>{user.username}</Text>
      </TouchableOpacity>
      <IconButton icon="more" onPress={() => {}} />
    </View>
  );
};

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

export default memo(PostHeader);
