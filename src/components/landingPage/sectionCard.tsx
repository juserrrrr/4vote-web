import { CardLP } from './cardLP';

export function SectionCard() {
  return (
    <section
      id="/informacoes"
      className="min-w-max h-[503px]"
    >
      <ul className="flex justify-between ml-[85px] mr-[75px] gap-16 mt-[100px]">
        <li className="opacity-100 hover:opacity-90">
          <CardLP
            titulo="Fácil e Intuitivo"
            corTitulo="corPrincipal"
            texto="Nossa interface intuitiva torna o processo rápido e sem complicações, para que você possa focar no que realmente importa: "
            textoDestacadoFinal=" as opiniões."
          />
        </li>
        <li className="opacity-100 hover:opacity-90">
          <CardLP
            titulo="Design Inovador"
            corTitulo="corSecundaria"
            texto="Deixe sua marca com enquetes que não só capturam a atenção, mas também refletem sua"
            textoDestacadoFinal=" individualidade."
          />
        </li>
        <li className="opacity-100 hover:opacity-90">
          <CardLP
            titulo="Gratuito"
            corTitulo="corPrincipal"
            texto=", sem limites ou taxas. Comece agora e descubra a verdadeira liberdade de expressão."
            textoDestacadoInicio="Liberdade para criar, compartilhar e votar"
            largura="[400px]"
          />
        </li>
      </ul>
    </section>
  );
}
