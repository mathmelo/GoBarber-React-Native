import React, { useRef } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {};

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={() => {}}>Criar Conta</SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Já sou cadastrado</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
};

export default SignUp;
