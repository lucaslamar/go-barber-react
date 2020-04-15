import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/action';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispach = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispach(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="email@servidor.com" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha Atual" />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="ConfirmPassword"
          type="Password"
          placeholder="Confirmação de Senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Sair </button>
    </Container>
  );
}
