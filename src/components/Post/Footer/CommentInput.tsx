import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { ProfileImage, TextButton } from 'components';
import { palette, spacing } from 'theme';

type CommentInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const CommentInput: React.FC<CommentInputProps> = ({
  value,
  onChangeText,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ProfileImage size={24} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Add a comment..."
        placeholderTextColor={palette.black20}
        style={styles.input}
      />
      <View style={styles.emojiContent}>
        <TextButton title="❤️" onPress={() => {}} />
        <TextButton title="🙌" onPress={() => {}} />
        <TextButton title="⊕" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 36,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    marginHorizontal: spacing.extraSmall,
    marginRight: spacing.medium,
    color: palette.surface,
  },
  emojiContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.small,
  },
});

export default CommentInput;
