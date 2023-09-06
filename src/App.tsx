import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import ChatScreen from './features/chat/screens/ChatScreen';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <ChatScreen />
    </Provider>
  );
};

export default App;
