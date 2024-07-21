import Image from 'next/image';
import conection from '@/components/landingPage/assets/conection-word.svg';
import Link from 'next/link';

export function SectionHero() {
  return (
    <section
      id="home"
      className="min-w-full h-auto bg-gradient-to-r from-[#043c86] to-[#028fdd] flex justify-center items-center py-8"
    >
      <div className="w-full max-w-[1650px] px-[15px] mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex-1 text-center lg:text-left max-w-[613px]">
          <h1 className="text-white text-4xl lg:text-5xl font-medium lg:ml-[55px] mt-[110px]">
            Está pronto para dar voz às suas opiniões e transformar sua visão em realidade?
          </h1>
          <p className="text-white text-lg lg:text-xl w-full lg:w-[386px] lg:ml-[60px] mt-6">
            Descubra uma plataforma intuitiva e poderosa, projetada para tornar suas enquetes e votações uma experiência
            fácil, envolvente e significativa. Junte-se a nós e faça cada voto contar!
          </p>
          <div className="flex flex-col lg:flex-row items-center mt-8">
            <Link href="cadastro">
              <div className="text-white bg-corContraste hover:opacity-90 font-bold lg:text-2xl rounded-full h-[84px] lg:h-[100px] w-[244px] lg:w-[300px] mx-auto lg:ml-[60px] lg:mr-2 cursor-pointer text-center flex items-center justify-center mb-4 lg:mb-0">
                Cadastre-se agora
              </div>
            </Link>
            <Link href="inicio">
              <div className="text-white opacity-80 bg-corBotaoLP hover:opacity-70 font-bold lg:text-2xl rounded-full h-[84px] lg:h-[100px] w-[254px] lg:w-[300px] mx-auto cursor-pointer text-center flex items-center justify-center">
                Entrar como <br /> convidado
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-8 lg:mt-0 lg:ml-8">
          <div className="w-full h-auto max-w-[600px] max-h-[600px] lg:max-w-[700px] lg:max-h-[700px]">
            <Image
              src={conection}
              alt="conection"
              layout="responsive"
              width={650} // Define the intrinsic width
              height={650} // Define the intrinsic height
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
