import React from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { useAppSelector } from 'store/store';
import { palette } from 'theme';
import Image from './Image';

interface ProfileImageTypes {
  url?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const ProfileImage: React.FC<ProfileImageTypes> = ({ url, size, style }) => {
  const currentUser = useAppSelector(state => state.user);
  return (
    <Image
      url={url || currentUser.user?.avatar || ''}
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
