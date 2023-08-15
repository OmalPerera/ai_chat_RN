import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import ChatScreen from './features/chat/screens/ChatScreen';
import {colors} from './utils';

const App = (): React.JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <>
          <SafeAreaView style={styles.backgroundStyle} />
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={colors.greyBg}
          />
          <View style={styles.bodyContainer}>
            <ChatScreen />
          </View>
          <SafeAreaView style={styles.backgroundStyle} />
        </>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: colors.greyBg,
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: colors.greyBg,
  },
});

export default App;
