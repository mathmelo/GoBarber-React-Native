import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { userUpdateFailure, userUpdateSuccess } from './actions';

export function* userProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado');

    yield put(userUpdateSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados',
    );

    yield put(userUpdateFailure());
  }
}

export default all([takeLatest('@user/USER_UPDATE_REQUEST', userProfile)]);
