import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from 'navigation';
import { persistor, store } from 'store/store';
import { palette } from 'theme';

RNBootSplash.hide({ fade: true });

function App(): JSX.Element {
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(palette.white, 'dark', 'both');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
export default App;
