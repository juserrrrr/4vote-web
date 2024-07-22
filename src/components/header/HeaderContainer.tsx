'use client';
import { useContext } from 'react';
import { Header } from './header';
import { ProfileContext } from '../../contexts/profileContext';

interface HeaderContainerProps {
  onLogout: () => void;
}

function HeaderContainer({ onLogout }: HeaderContainerProps) {
  const { profile } = useContext(ProfileContext);
  return (
    <>
      <Header
        usuarioLogado={!!profile.nome}
        nomeUsuario={profile.nome}
        urlPerfil={profile.URLimagem}
        onLogout={onLogout}
      />
    </>
  );
}

export default HeaderContainer;
