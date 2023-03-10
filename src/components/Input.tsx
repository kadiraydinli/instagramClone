import React from 'react';
import {
  KeyboardTypeOptions,
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
  inputRef?: React.LegacyRef<TextInput>;
  type?: InputTypes;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Input: React.FC<InputProps> = ({
  inputRef,
  type = 'default',
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
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
      keyboardType: 'default',
      secureTextEntry: true,
    },
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        ref={inputRef}
        value={value}
        autoCapitalize={inputType[type].autoCapitalize}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={palette.black20}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={inputType[type].secureTextEntry}
        keyboardType={inputType[type].keyboardType}
        style={styles.input}
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
  input: {
    height: '100%',
    color: palette.surface,
    padding: 0,
    margin: 0,
  },
});

export default Input;
