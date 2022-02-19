import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import './config/ReactotronConfig';
import './config/GestureHandlerLog';

import { store, persistor } from './store';

import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#7159c1" barStyle="light-content" />

            <App />
          </GestureHandlerRootView>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
