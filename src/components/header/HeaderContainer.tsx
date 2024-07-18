'use client';
import { useContext } from 'react';
import { Header } from './header';
import { ProfileContext } from '../../contexts/profileContext';

function HeaderContainer() {
  const { profile } = useContext(ProfileContext);
  return (
    <>
      <Header
        usuarioLogado={!!profile.nome}
        nomeUsuario={profile.nome}
        urlPerfil={profile.URLPerfil}
      />
    </>
  );
}

export default HeaderContainer;
