import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSucess, SignFailure } from './actions';

export function* SignIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error('Usuário não é um provider');
      return;
    }

    yield put(signInSucess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(SignFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
