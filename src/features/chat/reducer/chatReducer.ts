import {createSlice} from '@reduxjs/toolkit';
import {Action} from '../../../store/reducers/types';
import {ChatReducerType} from '../../../types/chat.types';

const INITIAL_STATE: ChatReducerType = {
  conversationThread: [],
  isReplyPending: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: INITIAL_STATE,
  reducers: {
    updateThread: (state, action: Action) => {
      state.conversationThread = state.conversationThread.concat(
        action.payload,
      );
    },
    isLoading: (state, action: Action) => {
      state.isReplyPending = action.payload;
    },
    setValue: {
      reducer: (state, action: Action) => {
        state.isReplyPending = action.payload;
      },
      prepare: (e, gap) => {
        return {payload: e - gap};
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateThread, setValue, isLoading} = chatSlice.actions;
export default chatSlice.reducer;
