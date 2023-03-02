import React, { useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { InputSearch } from 'assets/icons';
import { palette, spacing } from 'theme';

type SearchInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  onFocus?: () => void;
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

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.container, style]}>
      <InputSearch />
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        placeholder="Search"
        style={styles.input}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.small,
    borderRadius: 10,
    backgroundColor: palette.searchInput,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: spacing.small,
  },
});

export default SearchInput;
