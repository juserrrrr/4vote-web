import options from '@/components/landingPage/assets/options.svg';
import Image from 'next/image';

export function SectionService() {
  return (
    <section className="bg-background-blue min-w-max h-[702px] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-1 justify-between w-full px-[15px] mx-auto">
        <p className="font-bold text-left text-white w-[330px] text-4xl mt-[70px] ml-4">
          Crie enquetes e votações de forma
          <span className="text-corContraste text-left font-extrabold"> rápida </span>&
          <span className="text-corContraste text-left font-extrabold"> fácil</span>
        </p>
        <Image
          src={options}
          alt="options"
          width={814}
          height={648}
          className="mt-12 opacity-100 hover:opacity-95"
        />
        <p className="font-bold text-right text-white w-[300px] text-4xl mr-4 mb-4 self-end">
          Votos únicos com<span className="text-corContraste font-extrabold"> segurança </span>e
          <span className="text-corContraste font-extrabold"> autenticação</span>
        </p>
      </div>
    </section>
  );
}
