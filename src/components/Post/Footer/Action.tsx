import React, { useCallback, useState } from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import { IconButton } from 'components';
import { spacing } from 'theme';

interface PostFooterActionTypes {}

const PostFooterAction: React.FC<PostFooterActionTypes> = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const likeOnPress = useCallback(() => {
    Vibration.vibrate();
    setLiked(!liked);
  }, [liked]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <IconButton
          icon={liked ? 'heartSelected' : 'heart'}
          onPress={likeOnPress}
        />
        <IconButton icon="comment" onPress={() => {}} />
        <IconButton icon="share" onPress={() => {}} />
      </View>
      <IconButton
        icon={saved ? 'bookmarkSelected' : 'bookmark'}
        onPress={() => setSaved(!saved)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    gap: spacing.small,
  },
});

export default PostFooterAction;
