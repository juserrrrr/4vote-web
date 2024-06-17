import Image from 'next/image';
import conection from '@/components/landingPage/assets/conection-word.svg';
import { CardLP } from './cardsLP';

export function SectionHero() {
  return (
    <section className="w-full h-[741px] bg-background-word bg-no-repeat bg-center bg-cover">
      <div className="w-full max-w-auto px-[15px] mx-auto flex justify-between">
        <div className="flex-1 w-max-[613px]">
          <h1 className="text-white text-4xl font-medium w-[613px] ml-[55px] mt-[110px]">
            Está pronto para dar voz às suas opiniões e transformar sua visão em realidade?
          </h1>
          <p className="text-white text-[16px] w-[386px] ml-[60px] mt-6">
            Descubra uma plataforma intuitiva e poderosa, projetada para tornar suas enquetes e votações uma experiência
            fácil, envolvente e significativa. Junte-se a nós e faça cada voto contar!
          </p>
          <button
            className="text-white bg-corContraste hover:opacity-90 font-extrabold text-3xl rounded-full h-[84px]
          w-[244px] ml-[60px] mr-2 mt-8"
          >
            cadastre-se agora
          </button>
          <button className="text-white opacity-80 bg-corBotaoLP hover:opacity-70 font-extrabold text-3xl rounded-full h-[84px] w-[254px]">
            entrar como convidado
          </button>
        </div>
        <Image
          src={conection}
          alt="conection"
        />
      </div>
      <div className="w-full h-[603px]">
        <ul className="flex ml-[85px] mr-[75px] gap-16 mt-[100px]">
          <li>
            <CardLP
              titulo="Fácil e Intuitivo"
              corTitulo="corPrincipal"
              texto="Nossa interface intuitiva torna o processo rápido e sem complicações, para que você possa focar no que realmente importa:"
              textoDestacadoFinal=" as opiniões."
            />
          </li>
          <li>
            <CardLP
              titulo="Design Inovador"
              corTitulo="corSecundaria"
              texto="Deixe sua marca com enquetes que não só capturam a atenção, mas também refletem sua"
              textoDestacadoFinal=" individualidade."
            />
          </li>
          <li>
            <CardLP
              titulo="Gratuito"
              corTitulo="corPrincipal"
              texto=", sem limites ou taxas. Comece agora e descubra a verdadeira liberdade de expressão."
              textoDestacadoInicio="Liberdade para criar, compartilhar e votar"
              largura="[400px]"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
