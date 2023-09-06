import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../../features/chat/screens/ChatScreen';
import AboutScreen from '../../features/about/AboutScreen';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={'ChatScreen'}>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
