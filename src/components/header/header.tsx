'use client';
import { Logo4vote } from './logo4vote';
import { InfoUsuario } from './infoUsuario';
import { UserCircleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';
import { getCurrentUserInfo } from '@/lib/user';
import { useEffect, useState } from 'react';

interface HeaderProps {
  usuarioLogado: boolean;
  nomeUsuario?: string;
  urlPerfil?: string;
}

export function Header({ usuarioLogado, nomeUsuario, urlPerfil }: HeaderProps) {
  const [nome, setNewNome] = useState('Login/Registro');

  async function updateHeaderUsername() {
    const userInfo = await getCurrentUserInfo();
    if (userInfo != null) {
      setNewNome(userInfo['nome']);
    }
  }

  useEffect(() => {
    updateHeaderUsername();
  }, []);

  return (
    <header className="flex items-center w-full h-[70px] fixed z-20 bg-white shadow y-">
      <div className="w-full max-w-auto px-[15px] mx-auto flex items-center justify-between">
        <Logo4vote />
        <div className="flex items-center ml-auto">
          {usuarioLogado && nomeUsuario && urlPerfil ? (
            <div className="flex items-center gap-2">
              <InfoUsuario
                nomeUsuario={nomeUsuario}
                urlPerfil={urlPerfil}
              />
              <button className="p-1">
                <ArrowRightEndOnRectangleIcon className="text-corPrincipal w-10 h-10" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button className="text-corPrincipal font-bold mr-2">{nome}</button>
              <UserCircleIcon className="text-corPrincipal w-10 h-10" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
