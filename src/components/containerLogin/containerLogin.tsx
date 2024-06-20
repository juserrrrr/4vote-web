import Image from 'next/image';

function ContainerLogin({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/2 h-percent90 flex flex-shrink-0 shadow-sombraLogin rounded-[14px] bg-corPrincipal">
      <div className="w-1/2 h-full flex flex-col flex-shrink-0 justify-end items-center gap-[10px] px-20 py-5 bg-corPrincipal rounded-[14px]">
        <div className="h-full flex flex-col justify-between flex-shrink-0 items-center">
          <div className="flex flex-col justify-between items-center flex-shrink-0">
            <Image
              src="/imagens/4vote white.png"
              alt="Logo-4vote"
              width={360}
              height={164}
            />
            <div className="flex flex-col justify-center flex-shrink-0 text-white text-center font-bold text-xl">
              Bem-vindo(a) ao mais novo sistema de votações/enquetes!
            </div>
          </div>
          <div className="flex flex-col justify-center flex-shrink-0 text-white text-center text-base">
            <p>Powered by NexusTech © Copyright 2024 NexusTech, Todos os Direitos Reservados.</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between items-center bg-white rounded-[14px]">{children}</div>
    </div>
  );
}

export default ContainerLogin;
