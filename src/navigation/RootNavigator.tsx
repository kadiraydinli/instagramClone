import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from 'screens';
import users from 'utils/jsons/users.json';
import { useAppDispatch, useAppSelector } from 'store/store';
import { fetchUserById } from 'store/User';
import BottomNavigator from './BottomNavigator';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const isLogin = useAppSelector(state => state.root.isLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Burası tüm kullanıcılardan rastgele bir kullanıcıyı login olmuş gibi verilerini çekiyorum
    const randomUserId = users[Math.floor(Math.random() * users.length)].id;
    dispatch(fetchUserById(randomUserId));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <Stack.Screen name="Main" component={BottomNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
