import React, { memo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SoundOff, SoundOn } from 'assets/icons';
import { palette, spacing } from 'theme';
import { useAppSelector } from 'store/store';

type ToggleSoundProps = {
  onToggle: (level: number) => void;
};

const SIZE = 24;

const ToggleSound: React.FC<ToggleSoundProps> = ({ onToggle }) => {
  const volumeLevel = useAppSelector(state => state.ui.videoVolumeLevel);

  const isOpen = volumeLevel === 1;

  const onPress = useCallback(() => onToggle(isOpen ? 0 : 1), [isOpen]);

  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      {isOpen ? <SoundOn /> : <SoundOff />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: spacing.medium,
    right: spacing.medium,
    backgroundColor: palette.surface,
    borderRadius: 100,
    zIndex: 99,
  },
});

export default memo(ToggleSound);
