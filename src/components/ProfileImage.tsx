import React from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { palette } from 'theme';
import Image from './Image';

interface ProfileImageTypes {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const ProfileImage: React.FC<ProfileImageTypes> = ({ size, style }) => {
  const url = 'https://picsum.photos/400';
  return (
    <Image
      url={url}
      style={[
        styles.container,
        size ? { width: size, height: size } : {},
        style,
      ]}
    />
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: palette.gray,
  },
});
