import {createSlice} from '@reduxjs/toolkit';
import {SET_COUNTER} from '../actionTypes';

const INITIAL_STATE = {
  currentNumber: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    setValue: (state, action) => {
      state.currentNumber = action.payload;
    },
    increment: state => {
      state.currentNumber += 1;
    },
    decrement: state => {
      state.currentNumber -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, setValue} = counterSlice.actions;
export default counterSlice.reducer;
