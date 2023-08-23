import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCounterAction} from './counterActions';
//import {setValue} from './newCounterReducer';

const CounterComponent = (): React.JSX.Element => {
  //const currentNum = useSelector(state => state.counterReducer.currentNumber);
  const currentNum = 0; //useSelector(state => state.counterSlice.currentNumber);
  const dispatch = useDispatch();

  const updateCounterValue = (operator: '+' | '-') => {
    if (operator === '+') {
      //dispatch(setValue(currentNum + 1));
      dispatch(setCounterAction(currentNum + 1));
    } else {
      //dispatch(setValue(currentNum - 1, 10));
      //dispatch(setCounterAction(currentNum - 1));
    }
  };

  return (
    <>
      <Text style={styles.titleStyles}>Testing flux & thunk</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            updateCounterValue('-');
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.valueContainer}>
          <Text style={styles.valueStyle}>{currentNum}</Text>
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            updateCounterValue('+');
          }}>
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
