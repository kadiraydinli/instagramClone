import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from 'navigation/BottomNavigator';
import { HomeHeader } from 'components';

type Props = NativeStackScreenProps<BottomTabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <Text>Home Screen</Text>
      <Button title="Back to Login" onPress={() => navigation.pop()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
