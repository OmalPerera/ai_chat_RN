import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {AppNavigator} from './navigator/AppNavigator';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

const isNewUser = false;
const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <AppNavigator isNewUser={isNewUser} />
    </Provider>
  );
};

export default App;
