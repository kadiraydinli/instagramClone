import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { InputSearch } from 'assets/icons';
import { palette, spacing } from 'theme';

type SearchInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <InputSearch />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
