import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import ChatScreen from '../../features/chat/screens/ChatScreen';
import AboutScreen from '../../features/about/AboutScreen';
import CustomDrawer from './CustomDrawer';
import {colors} from '../../utils';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (): React.JSX.Element => {
  const renderCustomDrawer = (props: DrawerContentComponentProps) => {
    return <CustomDrawer {...props} />;
  };

  return (
    <Drawer.Navigator
      initialRouteName={'ChatScreen'}
      drawerContent={props => renderCustomDrawer(props)}>
      <Drawer.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{drawerActiveTintColor: colors.greyBg, headerShown: false}}
      />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
