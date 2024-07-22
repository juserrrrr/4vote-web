import Image from 'next/image';

function ContainerLogin({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col-reverse justify-center items-center shadow-sombraLogin rounded-[14px] bg-corPrincipal md:flex-row md:h-4/6 md:w-[45rem]">
      <div className="w-full flex-col justify-end items-center px-2 py-2 bg-corPrincipal rounded-[14px] hidden md:flex">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="relative w-52 h-20">
            <Image
              src="/imagens/4vote white.png"
              alt="Logo-4vote"
              fill
              className="object-cover"
            />
          </div>
          <span className="flex flex-col justify-center text-white text-center font-bold text-xl">
            Bem-vindo(a) ao mais novo sistema de votações/enquetes!
          </span>
          <div className="flex flex-col justify-center text-white text-center text-base">
            <p>Powered by NexusTech © Copyright 2024 NexusTech, Todos os Direitos Reservados.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center py-4 bg-white rounded-[14px]">
        {children}
      </div>
    </div>
  );
}

export default ContainerLogin;
