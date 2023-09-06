import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../../features/chat/screens/ChatScreen';
import AboutScreen from '../../features/about/AboutScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = (): React.JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName={'ChatScreen'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="AboutScreen" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
