import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import AuthHoc from './AuthHoc';

const MyProfileComponent = () => {
  return (
    <View style={styles.navBarContainer}>
      <Text style={styles.chatNameTxt}>MY PROFILE</Text>
    </View>
  );
};

export default AuthHoc(MyProfileComponent);

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.greyBorder,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  chatNameTxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
  },
});
