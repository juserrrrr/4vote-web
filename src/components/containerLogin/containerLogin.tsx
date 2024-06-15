import Image from 'next/image';
import Butao from '../buttons/button';

function ContainerLogin() {
  return (
    <div className="w-3/5 flex flex-row h-percent90 flex-shrink-0 shadow-sombraLogin bg-corPrincipal text-white rounded-[14px]">
      <div className="w-1/2 h-full flex-shrink-0 flex flex-col justify-between items-center gap-[10px] px-20 py-5">
        <div className="flex flex-col justify-between flex-shrink-0 items-center">
          <Image
            src="/imagens/4vote white.png"
            alt="Logo-4vote"
            width={360}
            height={164}
          />
          <div className="flex flex-col justify-center flex-shrink-0 text-white text-center font-bold text-xl">
            <p>Bem-vindo(a) ao mais novo sistema de votações/enquetes!</p>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-shrink-0 text-white text-center text-base">
          <p>Powered by NexusTech © Copyright 2024 NexusTech, Todos os Direitos Reservados.</p>
        </div>
      </div>
      <div className="bg-white h-full w-full rounded-[14px]">
        <p></p>
      </div>
    </div>
  );
}

export default ContainerLogin;
