import { SafeAreaView, Text } from 'react-native';
import React from 'react';

import Background from '~/components/Background';

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Text>SignIn</Text>
      </Background>
    </SafeAreaView>
  );
}
