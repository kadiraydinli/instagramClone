import React from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { palette, spacing } from 'theme';

type InputType = 'default' | 'email' | 'password';

type InputProps = {
  type?: InputType;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};

const Input: React.FC<InputProps> = ({
  type = 'default',
  value,
  onChangeText,
  placeholder,
  style,
}) => {
  const inputType = {
    default: {
      keyboardType: 'default',
      secureTextEntry: false,
    },
    email: {
      keyboardType: 'email-address',
      secureTextEntry: false,
    },
    password: {
      keyboardType: Platform.select({
        android: 'visible-password',
        ios: 'default',
      }),
      secureTextEntry: true,
    },
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={inputType[type].secureTextEntry}
        keyboardType={inputType[type].keyboardType as KeyboardTypeOptions}
        style={styles.inputContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    backgroundColor: palette.highEmphasis,
    paddingHorizontal: spacing.medium,
    borderWidth: 0.5,
    borderColor: palette.black10,
    borderRadius: 5,
  },
  inputContainer: {
    height: '100%',
  },
});

export default Input;
