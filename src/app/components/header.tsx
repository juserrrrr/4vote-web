import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '/imagens/4vote-principal.png';

export function Header() {
  return (
    <header className="relative w-full h-34 bg-white flex items-center">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={LogoImg}
            alt="Logo 4vote"
            width={100}
            height={100}
          />
        </div>
        <nav className="flex items-center">
          <Link
            href="#"
            className="text-corPrincipal text-opacity-70 hover:text-opacity-100 transition-all px-6 py-1"
          >
            +Informações
          </Link>
          <Link
            href="#"
            className="text-corPrincipal text-opacity-70 hover:text-opacity-100 transition-all px-6 py-1"
          >
            Sobre a Empresa
          </Link>
          <Link
            href="#"
            className="text-corPrincipal text-opacity-70 hover:text-opacity-100 transition-all px-6 py-1"
          >
            Benefícios
          </Link>
        </nav>
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-1">
            <span className="text-corPrincipal text-opacity-100 mb-1 text-xs">Já tem uma conta?</span>
            <button className="bg-corPrincipal flex items-center gap-2 px-6 py-1 rounded-full">
              <span className="text-white font-medium text-sm">Entrar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
