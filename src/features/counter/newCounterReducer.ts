// import {createSlice} from '@reduxjs/toolkit';
// import {customSetCounterAction} from './counterActions';

// const INITIAL_STATE = {
//   currentNumber: 1,
// };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: INITIAL_STATE,
//   reducers: {
//     setValue: {
//       reducer: (state, action: Action) => {
//         state.currentNumber = action.payload;
//       },
//       prepare: (e, gap) => customSetCounterAction(e, gap),
//     },
//     increment: state => {
//       state.currentNumber += 1;
//     },
//     decrement: state => {
//       state.currentNumber -= 1;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {increment, decrement, setValue} = counterSlice.actions;
// export default counterSlice.reducer;
