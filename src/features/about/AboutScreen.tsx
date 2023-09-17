import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../utils';
import MyProfileComponent from './profile';

const AboutScreen = (): React.JSX.Element => {
  return (
    <>
      <SafeAreaView style={styles.backgroundStyle} />
      <View style={styles.outermostContainer}>
        <MyProfileComponent />
        <Button onPress={() => {}} title="Change theme" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  backgroundStyle: {
    backgroundColor: colors.greyBg,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AboutScreen;
