import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, images} from '../../../utils';

const NavBarComponent = ({onRightBtnPress, onMenuPress}) => {
  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity style={styles.menuBtn} onPress={onMenuPress}>
        <Image source={images.menu} style={styles.menuImg} />
      </TouchableOpacity>
      <Text style={styles.chatNameTxt}>Chat Name</Text>
      <TouchableOpacity onPress={onRightBtnPress}>
        <Image source={images.botHeadshot} style={styles.botImg} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBarComponent;

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.greyBorder,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  menuBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  menuImg: {
    height: 35,
    width: 35,
  },
  chatNameTxt: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  botImg: {
    height: 35,
    width: 35,
    marginHorizontal: 15,
  },
});
