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
    <header className="flex items-center w-full h-[70px] fixed z-20 bg-white shadow y-">
      <div className="w-full max-w-auto px-[15px] mx-auto flex items-center justify-between">
        <Logo4vote />
        <div className="flex items-center ml-auto">
          {usuarioLogado && nomeUsuario ? (
            <div className="flex items-center gap-2">
              <InfoUsuario
                nomeUsuario={nomeUsuario}
                urlPerfil={
                  urlPerfil ||
                  'https://img.freepik.com/fotos-gratis/o-sol-nubla-se-o-ceu-durante-o-fundo-da-manha-ceu-azul-branco-e-pastel-lente-de-foco-suave-luz-solar-alargada-gradiente-ciano-borrado-abstrato-de-natureza-pacifica-abrir-vista-para-janelas-lindo-verao-primavera_1253-1092.jpg?t=st=1721057615~exp=1721061215~hmac=be8f5e1395f7425ffe92639e948e293e7db78e0c351088d38e8eee994797636e&w=1060'
                }
              />
              <button
                onClick={async (_) => {
                  if (onLogout) {
                    await onLogout();
                    router.push('/');
                  }
                }}
                className="p-1"
              >
                <ArrowRightEndOnRectangleIcon className="text-corPrincipal w-10 h-10" />
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
