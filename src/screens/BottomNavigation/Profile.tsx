import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from 'navigation/BottomNavigator';
import { Button } from 'components';
import { useAppDispatch } from 'store/store';
import { setLogout } from 'store/Root';
import { palette, spacing } from 'theme';

type Props = NativeStackScreenProps<BottomTabParamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(setLogout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button title="Logout" onPress={onLogout} />
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

export default ProfileScreen;
