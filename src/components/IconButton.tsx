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
  SearchBarX,
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
  searchBarX: <SearchBarX />,
};

export type IconTypes = keyof typeof icons;

interface IconButtonTypes {
  icon: IconTypes;
  onPress: () => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<IconButtonTypes> = ({
  icon,
  onPress,
  size,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        size ? { width: size, height: size } : {},
        style,
      ]}>
      {icons[icon]}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
