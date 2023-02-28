import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from 'navigation/BottomNavigator';

type Props = NativeStackScreenProps<BottomTabParamList, 'Reels'>;

const ReelsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Reels Screen</Text>
      <Button title="Back to Login" onPress={() => navigation.pop()} />
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

export default ReelsScreen;
