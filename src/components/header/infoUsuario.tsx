import Image from 'next/image';

interface InfoUsuarioProps {
  nomeUsuario: string;
  urlPerfil: string;
}

export function InfoUsuario({ nomeUsuario, urlPerfil }: InfoUsuarioProps) {
  return (
    <>
      <span className="text-corPrincipal font-bold mr-4">{nomeUsuario}</span>
      <div className="rounded-full border-2 mr-2 border-corPrincipal overflow-hidden w-10 h-10">
        <Image
          src={urlPerfil}
          alt="Foto de Perfil"
          width={1000}
          height={1000}
          className="block w-full h-full object-cover"
        />
      </div>
    </>
  );
}
