import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar animated backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </>
  );
}
