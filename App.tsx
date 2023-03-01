import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { RootNavigator } from 'navigation';
import { store } from 'store/store';

RNBootSplash.hide({ fade: true });

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
export default App;
