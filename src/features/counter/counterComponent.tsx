import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const CounterComponent = (): React.JSX.Element => {
  const currentNum = useSelector(state => state.counterReducer.currentNumber);

  return (
    <>
      <Text style={styles.titleStyles}>Testing flux & thunk</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.valueContainer}>
          <Text style={styles.valueStyle}>{currentNum}</Text>
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default CounterComponent;
