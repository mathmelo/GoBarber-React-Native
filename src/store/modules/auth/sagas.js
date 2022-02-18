import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { signFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    // const { navigate } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      yield put(signFailure());

      Alert.alert(
        'Erro no login',
        'O usuário não pode ser prestador de serviços',
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // navigate('/dashboard', { replace: true });
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    // const { navigate } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: false,
    });

    // navigate('/', { replace: true });
  } catch (err) {
    console.tron.log(err);

    Alert.alert(
      'Erro no cadastro',
      'Houve uma falha no cadastro de usuário, tente novamente',
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
