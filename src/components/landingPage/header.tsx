import Image from 'next/image';
import Link from 'next/link';
import { ItemHeader } from './itemHeader';

export function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-white">
      <div className="w-full max-w-auto px-[15px] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={'/imagens/4vote-principal.png'}
            alt="Logo"
            width={128}
            height={88}
          />
        </div>
        <div className="flex items-center gap-14 absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-2">
            <li>
              <ItemHeader nome="+Informações" />
            </li>
            <li>
              <ItemHeader nome="Sobre a Empresa" />
            </li>
            <li>
              <ItemHeader nome="Benefícios" />
            </li>
          </ul>
        </div>
        <div className="flex items-center ml-auto">
          <div className="flex flex-col items-center mr-1">
            <span className="text-corPrincipal mb-1 text-xs">Já tem uma conta?</span>
            <button className="bg-custom-gradient-landingpage flex items-center gap-2 px-6 py-1 rounded-full">
              <span className="text-white text-32 text-opacity-100 hover:text-opacity-80 transition-all font-extrabold">
                Entrar
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
