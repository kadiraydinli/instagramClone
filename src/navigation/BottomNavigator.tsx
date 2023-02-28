import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Add,
  Home,
  HomeSelected,
  Reels,
  ReelsSelected,
  Search,
  SearchSelected,
} from 'assets/icons';
import { ProfileImage } from 'components';
import {
  AddScreen,
  HomeScreen,
  ProfileScreen,
  ReelsScreen,
  SearchScreen,
} from 'screens';

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Add: undefined;
  Reels: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <HomeSelected /> : <Home />),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <SearchSelected /> : <Search />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{ tabBarIcon: () => <Add /> }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ReelsSelected /> : <Reels />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <ProfileImage url="https://picsum.photos/2000" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
