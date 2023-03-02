import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SoundOff, SoundOn } from 'assets/icons';
import { palette, spacing } from 'theme';

type ToggleSoundProps = {
  onToggle: (open: boolean) => void;
};

const ToggleSound: React.FC<ToggleSoundProps> = ({ onToggle }) => {
  const [open, setOpen] = useState<boolean>(false);

  const onPress = () => {
    onToggle(!open);
    setOpen(!open);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      {open ? <SoundOn /> : <SoundOff />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
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

export default ToggleSound;
