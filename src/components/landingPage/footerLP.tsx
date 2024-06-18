import Image from 'next/image';
import nexus from '@/components/landingPage/assets/nexus.svg';
import iconEmail from '@/components/landingPage/assets/icon-email.svg';
import iconWord from '@/components/landingPage/assets/icon-word.svg';
import iconPhone from '@/components/landingPage/assets/icon-telefone.svg';

export function FooterLP() {
  return (
    <footer className="min-w-max bg-custom-gradient-footer h-[252px] bg-no-repeat bg-center bg-cover flex flex-col items-center">
      <div className="w-full max-w-auto px-[749px] mx-auto flex justify-between"></div>
      <Image
        src={nexus}
        alt="nexus"
        height={121}
        width={521}
        className="mt-6"
      />
      <p className="text-white font-medium mb-4 text-center text-2xl">
        “Construindo pontes digitais para o futuro: Nexustech, a engenharia de software que conecta ideias à inovação!”
      </p>
      <ul className="flex">
        <li className="flex items-center p-2">
          <Image
            src={iconEmail}
            alt="email"
          />
          <p className="text-white ml-2 font-light text-2xl">setorAtendimento@nexustech.com</p>
        </li>
        <li className="flex items-center p-2">
          <Image
            src={iconWord}
            alt="word"
          />
          <p className="text-white ml-2 font-light text-2xl">nexusTechSoftware&Engenharia.com.br</p>
        </li>
        <li className="flex items-center p-2">
          <Image
            src={iconPhone}
            alt="telefone"
          />
          <p className="text-white ml-2 font-light text-2xl">(75) 99456-9797</p>
        </li>
      </ul>
    </footer>
  );
}
