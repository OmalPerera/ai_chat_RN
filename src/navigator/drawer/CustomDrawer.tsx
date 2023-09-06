import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {colors} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = (
  props: DrawerContentComponentProps,
): React.JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: colors.themeColor}}>
        <View
          style={{
            backgroundColor: colors.themeColor,
            height: 200,
          }}></View>
        <View style={{backgroundColor: colors.white}}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Help"
            onPress={() => {
              navigation.navigate('AboutScreen');
            }}
          />
        </View>
      </DrawerContentScrollView>
      <Text>LOGOUT</Text>
    </View>
  );
};

export default CustomDrawer;
