import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from 'navigation/BottomNavigator';
import { Button } from 'components';
import { palette, spacing } from 'theme';

type Props = NativeStackScreenProps<BottomTabParamList, 'Reels'>;

const AddScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reels Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.extraLarge,
  },
  text: {
    fontSize: 40,
    color: palette.surface,
    marginBottom: 20,
  },
});

export default AddScreen;
