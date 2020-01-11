import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function Signin() {
  function handeSubmit(data) {}

  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form onSubmit={handeSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Cria Conta Gratuita</Link>
      </Form>
    </>
  );
}
