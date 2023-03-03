import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Lottie from 'lottie-react-native';
import { LoaderAnimation } from 'assets/animations';

const animations = {
  loader: LoaderAnimation,
};

export type LottieAnimations = keyof typeof animations;

type LottieAnimationProps = {
  animation: LottieAnimations;
  autoPlay?: boolean;
  loop?: boolean;
  style?: StyleProp<ViewStyle>;
};

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animation,
  autoPlay = true,
  loop = true,
  style,
}) => {
  return (
    <View style={styles.container}>
      <Lottie
        source={animations.loader}
        autoPlay={autoPlay}
        loop={loop}
        style={style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LottieAnimation;
