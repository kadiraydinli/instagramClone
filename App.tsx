import React from 'react';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from 'navigation';
import { persistor, store } from 'store/store';

RNBootSplash.hide({ fade: true });

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
export default App;
