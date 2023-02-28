import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { palette, spacing } from 'theme';

type TextButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const TextButton: React.FC<TextButtonProps> = ({
  title,
  onPress,
  color = palette.primaryButton,
  leftComponent,
  rightComponent,
  disabled,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled && { opacity: 0.5 }, style]}>
      {leftComponent && (
        <View style={styles.leftComponentStyle}>{leftComponent}</View>
      )}

      <Text style={[styles.text, color ? { color } : {}]}>{title}</Text>

      {rightComponent && (
        <View style={styles.rightComponentStyle}>{rightComponent}</View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 24,
    alignItems: 'center',
  },
  leftComponentStyle: { marginRight: spacing.extraSmall },
  rightComponentStyle: { marginLeft: spacing.extraSmall },
  text: {},
});

export default TextButton;
