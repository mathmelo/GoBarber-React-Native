import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />

        <Routes />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
