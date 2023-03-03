import React, { memo } from 'react';
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

const SIZE = 30;

const ProfileImage: React.FC<ProfileImageTypes> = ({
  url,
  size = SIZE,
  style,
}) => {
  const currentUser = useAppSelector(state => state.user);
  return (
    <Image
      url={url || currentUser.user?.avatar || ''}
      loaderForSize={size}
      style={[
        styles.container,
        size ? { width: size, height: size } : {},
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    backgroundColor: palette.gray,
  },
});

export default memo(ProfileImage);
