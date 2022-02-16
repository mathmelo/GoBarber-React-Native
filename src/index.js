import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routes from './routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />

      <Routes />
    </GestureHandlerRootView>
  );
}
