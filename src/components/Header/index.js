import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notificantions from '~/components/Notifications';

import logo from '~/assets/logo-roxa.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={profile.avatar.url} alt="Lamar" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
