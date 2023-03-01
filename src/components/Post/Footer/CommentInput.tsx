import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { ProfileImage, TextButton } from 'components';
import { spacing } from 'theme';

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
        style={styles.inputContainer}
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
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: spacing.extraSmall,
    marginRight: spacing.medium,
  },
  emojiContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.small,
  },
});

export default CommentInput;
