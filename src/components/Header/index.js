import React from 'react';
import { Link } from 'react-router-dom';

import Notificantions from '~/components/Notifications';

import logo from '~/assets/logo-roxa.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notificantions />
          <Profile>
            <div>
              <strong>Lucas Lamar</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Lamar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
