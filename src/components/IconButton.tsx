import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {
  ArrowLeft,
  Bookmark,
  Comment,
  Heart,
  HeartSelected,
  Messenger,
  More,
  Share,
} from 'assets/icons';
import { palette } from 'theme';

const icons = {
  comment: <Comment />,
  more: <More />,
  heart: <Heart />,
  heartSelected: <HeartSelected />,
  share: <Share />,
  bookmark: <Bookmark />,
  bookmarkSelected: <Bookmark fill={palette.surface} />,
  messenger: <Messenger />,
  arrowLeft: <ArrowLeft />,
};

export type IconTypes = keyof typeof icons;

interface IconButtonTypes {
  icon: IconTypes;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<IconButtonTypes> = ({ icon, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, style]}>
      {icons[icon]}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
