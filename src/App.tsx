import React from 'react';
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import store, { persistor } from './redux';
import AlertProvider from './utils/AlertProvider';
import RootNavigator from './navigation';

LogBox.ignoreAllLogs();

const App = () => (
  <Provider store={store} >
    <PersistGate
      persistor={persistor}
      loading={null}
    >
      <AlertProvider>
        <RootNavigator />
      </AlertProvider>
    </PersistGate>
  </Provider>
);
export default App;

