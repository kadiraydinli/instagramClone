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

type InputTypes = 'default' | 'email' | 'password';

type TypesForSelectedInputType = {
  [name in InputTypes]: {
    keyboardType: KeyboardTypeOptions | undefined;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  };
};

type InputProps = {
  type?: InputTypes;
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
  const inputType: TypesForSelectedInputType = {
    default: {
      keyboardType: 'default',
    },
    email: {
      keyboardType: 'email-address',
      autoCapitalize: 'none',
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
        autoCapitalize={inputType[type].autoCapitalize}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={inputType[type].secureTextEntry}
        keyboardType={inputType[type].keyboardType}
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
