import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import CounterComponent from './features/counter/counterComponent';
import ToDoComponent from './features/todo/components/todoComponent';

const App = (): React.JSX.Element => {
  const backgroundStyle = {
    backgroundColor: '#ffffff',
  };

  return (
    <>
      <Provider store={store}>
        <>
          <SafeAreaView style={backgroundStyle} />
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View style={styles.bodyContainer}>
            <CounterComponent />
            <ToDoComponent />
          </View>
          <SafeAreaView />
        </>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default App;
