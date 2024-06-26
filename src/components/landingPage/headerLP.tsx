import { ItemHeader } from './itemHeader';
import { Logo4vote } from '../header/logo4vote';
import Link from 'next/link';

export function HeaderLP() {
  return (
    <header className="flex items-center w-full h-20 fixed bg-white z-10">
      <div className="w-full max-w-auto px-[15px] mx-auto flex items-center justify-between">
        <div className="flex items-center ml-7 mr-auto">
          <Link href="#/home">
            <Logo4vote />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-14 absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-2">
            <li>
              <ItemHeader
                nome="+Informações"
                href="informacoes"
              />
            </li>
            <li>
              <ItemHeader
                nome="Sobre a Empresa"
                href="sobre"
              />
            </li>
            <li>
              <ItemHeader
                nome="Benefícios"
                href="beneficios"
              />
            </li>
          </ul>
        </div>
        <div className="flex items-center ml-auto mr-7">
          <div className="flex flex-col items-center mr-1">
            <span className="text-corPrincipal mb-1 text-xs">Já tem uma conta?</span>
            <Link href="login">
              <div className="bg-custom-gradient-landingpage flex items-center gap-2 px-6 py-1 rounded-full cursor-pointer">
                <span className="text-white text-32 text-opacity-100 hover:text-opacity-80 transition-all font-extrabold">
                  Entrar
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
