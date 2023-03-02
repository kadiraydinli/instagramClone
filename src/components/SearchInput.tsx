import React, { useRef } from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { InputSearch } from 'assets/icons';
import { palette, spacing } from 'theme';
import TextButton from './TextButton';

type SearchInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  onFocus: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  onFocus,
  style,
}) => {
  const inputRef = useRef<TextInput>(null);

  const onPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onClosePress = () => {
    onFocus(false);
    Keyboard.dismiss();
  };

  const isFocused = inputRef.current?.isFocused();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[styles.content, style]}>
        <InputSearch />
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => onFocus(true)}
          placeholder="Search"
          style={styles.input}
        />
      </TouchableOpacity>
      {isFocused && <TextButton title="Close" onPress={onClosePress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.small,
    gap: 6,
  },
  content: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.small,
    borderRadius: 10,
    backgroundColor: palette.gray3,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: spacing.small,
  },
});

export default SearchInput;
