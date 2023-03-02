import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from 'navigation/BottomNavigator';
import { Button } from 'components';
import { useAppDispatch } from 'store/store';
import { setLogout } from 'store/Root';
import { spacing } from 'theme';

type Props = NativeStackScreenProps<BottomTabParamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(setLogout());
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Logout"
        onPress={onLogout}
        style={{ marginTop: spacing.small }}
      />
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
});

export default ProfileScreen;
