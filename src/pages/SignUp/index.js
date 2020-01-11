import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  function handeSubmit(data) {}

  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form onSubmit={handeSubmit}>
        <Input name="name" type="text" placeholder="Seu Nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
