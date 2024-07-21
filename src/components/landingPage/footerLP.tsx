import Image from 'next/image';
import nexus from '@/components/landingPage/assets/nexus.svg';
import iconEmail from '@/components/landingPage/assets/icon-email.svg';
import iconWord from '@/components/landingPage/assets/icon-word.svg';
import iconPhone from '@/components/landingPage/assets/icon-telefone.svg';

export function FooterLP() {
  return (
    <footer
      id="/sobre"
      className="bg-custom-gradient-footer h-auto bg-no-repeat bg-center bg-cover flex flex-col items-center py-6 px-4 sm:px-8 lg:px-16"
    >
      {/* Nexus Image */}
      <Image
        src={nexus}
        alt="nexus"
        height={121}
        width={521}
        className="mt-6 mb-4"
      />
      
      {/* Footer Text */}
      <p className="text-white font-medium mb-4 text-center text-lg sm:text-xl lg:text-2xl">
        “Construindo pontes digitais para o futuro: Nexustech, a engenharia de software que conecta ideias à inovação!”
      </p>
      
      {/* Contact Information */}
      <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <li className="flex items-center p-2">
          <Image
            src={iconEmail}
            alt="email"
            width={24}
            height={24}
          />
          <p className="text-white ml-2 font-light text-base sm:text-lg">setorAtendimento@nexustech.com</p>
        </li>
        <li className="flex items-center p-2">
          <Image
            src={iconWord}
            alt="word"
            width={24}
            height={24}
          />
          <p className="text-white ml-2 font-light text-base sm:text-lg">nexusTechSoftware&Engenharia.com.br</p>
        </li>
        <li className="flex items-center p-2">
          <Image
            src={iconPhone}
            alt="telefone"
            width={24}
            height={24}
          />
          <p className="text-white ml-2 font-light text-base sm:text-lg">(75) 99456-9797</p>
        </li>
      </ul>
    </footer>
  );
}
