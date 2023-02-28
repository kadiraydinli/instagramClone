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
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
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
        options={{ tabBarIcon: ({ focused }) => <Add /> }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ReelsSelected /> : <Reels />,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
