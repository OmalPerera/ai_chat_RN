import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

const AboutScreen = (): React.JSX.Element => {
  return (
    <>
      <SafeAreaView style={styles.backgroundStyle} />
      <View style={styles.outermostContainer}>
        <Text>About Screen</Text>
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
});

export default AboutScreen;
