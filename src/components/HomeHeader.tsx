import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IGLogo } from 'assets/icons';
import { palette, spacing } from 'theme';
import IconButton from './IconButton';

type HomeHeaderProps = {};

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <IGLogo size="small" />
      <View style={styles.rightContent}>
        <IconButton icon="heart" onPress={() => {}} />
        <IconButton icon="messenger" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.white,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.extraSmall,
    borderBottomWidth: 1,
    borderBottomColor: palette.highEmphasis,
  },
  rightContent: {
    flexDirection: 'row',
    gap: spacing.large,
  },
});

export default HomeHeader;
