import Image from 'next/image';

interface InfoUsuarioProps {
  nomeUsuario: string;
  urlPerfil: string;
}

export function InfoUsuario({ nomeUsuario, urlPerfil }: InfoUsuarioProps) {
  return (
    <>
      <span className="text-corPrincipal font-bold text-nowrap text-right">
        {
          //Fazer aparecer 1 e 2 nome se houver segundo nome
          nomeUsuario.split(' ').map((nome, index) => {
            if (index === 0) {
              return nome;
            } else if (index === 1) {
              return ` ${nome[0]}.`;
            }
          })
        }
      </span>
      <div className="rounded-full border-2 border-corPrincipal relative w-10 h-10">
        <Image
          src={urlPerfil}
          alt="Foto de Perfil"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </>
  );
}
