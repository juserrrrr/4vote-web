'use client';
import { Logo4vote } from './logo4vote';
import { InfoUsuario } from './infoUsuario';
import { UserCircleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  usuarioLogado: boolean;
  nomeUsuario?: string;
  urlPerfil?: string | null;
  onLogout?: () => void;
}

export function Header({ usuarioLogado, nomeUsuario, urlPerfil, onLogout }: HeaderProps) {
  const router = useRouter();
  return (
    <header className="flex items-center w-full h-[70px] fixed z-30 bg-white shadow y-">
      <div className="w-full max-w-auto px-[15px] flex items-center justify-between">
        <Logo4vote />
        <div className="flex items-center">
          {usuarioLogado && nomeUsuario ? (
            <div className="flex-grow flex flex-row items-center gap-1">
              <InfoUsuario
                nomeUsuario={nomeUsuario}
                urlPerfil={
                  urlPerfil ||
                  'https://nydqbchcfgkevfdmbifx.supabase.co/storage/v1/object/public/Files4vote/Screenshot%202024-07-22%20212810.png'
                }
              />
              <button
                onClick={async (_) => {
                  if (onLogout) {
                    await onLogout();
                    router.push('/');
                  }
                }}
              >
                <ArrowRightEndOnRectangleIcon className="text-corPrincipal w-8 h-8" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-corPrincipal font-bold mr-2"
              >
                ENTRAR
              </Link>

              <UserCircleIcon className="text-corPrincipal w-10 h-10" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
