import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IGLogo } from 'assets/icons';
import { spacing } from 'theme';
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.extraSmall,
  },
  rightContent: {
    flexDirection: 'row',
    gap: spacing.large,
  },
});

export default HomeHeader;
