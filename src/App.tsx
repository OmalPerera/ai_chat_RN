import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = (): React.JSX.Element => {
  const backgroundStyle = {
    backgroundColor: '#ffffff',
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle} />
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={styles.bodyContainer}>
        <Text style={styles.titleStyles}>Testing flux & thunk</Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <View style={styles.valueContainer}>
            <Text style={styles.valueStyle}>0</Text>
          </View>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView />
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
  titleStyles: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    marginVertical: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 30,
  },
  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  valueStyle: {
    fontSize: 32,
  },
});

export default App;
