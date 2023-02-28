import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from 'theme';
import Image from './Image';

interface ProfileImageTypes {
  url: string;
  size?: number;
}

const ProfileImage: React.FC<ProfileImageTypes> = ({ url, size }) => {
  return (
    <Image
      url={url}
      style={[styles.container, size ? { width: size, height: size } : {}]}
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
