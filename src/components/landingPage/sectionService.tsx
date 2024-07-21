import options from '@/components/landingPage/assets/options.svg';
import Image from 'next/image';

export function SectionService() {
  return (
    <section className="relative bg-background-blue bg-no-repeat bg-center bg-cover min-h-[500px] py-4 md:py-8 lg:py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative lg:flex-row lg:justify-center">
        <p className="font-bold text-left text-white text-2xl md:text-3xl lg:text-4xl lg:absolute lg:top-8 lg:left-4 lg:max-w-xs">
          Crie enquetes e votações de forma
          <span className="text-corContraste font-extrabold"> rápida </span>&
          <span className="text-corContraste font-extrabold"> fácil</span>
        </p>
        <div className="flex justify-center w-full lg:w-auto">
          <Image
            src={options}
            alt="options"
            className="w-full lg:w-auto lg:max-w-xl opacity-100 hover:opacity-95 my-4 lg:my-0"
          />
        </div>
        <p className="font-bold text-right text-white text-2xl md:text-3xl lg:text-4xl lg:absolute lg:bottom-8 lg:right-4 lg:max-w-xs">
          Votos únicos com<span className="text-corContraste font-extrabold"> segurança </span>e
          <span className="text-corContraste font-extrabold"> autenticação</span>
        </p>
      </div>
    </section>
  );
}
