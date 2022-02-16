import React from 'react';
import { SafeAreaView } from 'react-native';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Input
          style={{ marginTop: 20 }}
          icon="call"
          placeholder="Digite seu nome"
        />

        <Button onPress={() => {}}>Entrar</Button>
      </Background>
    </SafeAreaView>
  );
}
