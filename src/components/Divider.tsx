import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { palette, spacing } from 'theme';

type DividerProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
};

const Divider: React.FC<DividerProps> = ({ title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.divider} />
      {title && <Text style={styles.text}>{title}</Text>}
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 0.33,
    backgroundColor: palette.black20,
  },
  text: {
    marginHorizontal: spacing.large,
    color: palette.black40,
  },
});

export default Divider;
