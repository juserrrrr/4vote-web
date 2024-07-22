import { CardLP } from './cardLP';

export function SectionCard() {
  return (
    <section
      id="/informacoes"
      className="w-full h-auto py-16"
    >
      <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-24 lg:gap-24 xl:gap-32 mx-auto max-w-7xl px-4">
        <li className="flex-1 w-full max-w-xs">
          <CardLP
            titulo="Fácil e Intuitivo"
            corTitulo="corPrincipal"
            texto="Nossa interface intuitiva torna o processo rápido e sem complicações, para que você possa focar no que realmente importa: "
            textoDestacadoFinal="as opiniões."
          />
        </li>
        <li className="flex-1 w-full max-w-xs">
          <CardLP
            titulo="Design Inovador"
            corTitulo="corSecundaria"
            texto="Deixe sua marca com enquetes que não só capturam a atenção, mas também refletem sua"
            textoDestacadoFinal=" individualidade."
          />
        </li>
        <li className="flex-1 w-full max-w-xs">
          <CardLP
            titulo="Gratuito"
            corTitulo="corPrincipal"
            texto=", sem limites ou taxas. Comece agora e descubra a verdadeira liberdade de expressão."
            textoDestacadoInicio="Liberdade para criar, compartilhar e votar"
          />
        </li>
      </ul>
    </section>
  );
}
