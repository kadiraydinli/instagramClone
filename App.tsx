import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { RootNavigator } from 'navigation';

RNBootSplash.hide({ fade: true });

function App(): JSX.Element {
  return <RootNavigator />;
}
export default App;
