interface Props {
  titulo: string;
  corTitulo: string;
  texto: string;
  textoDestacadoInicio?: string;
  textoDestacadoFinal?: string;
}

export function CardLP({ titulo, corTitulo, texto, textoDestacadoInicio = '', textoDestacadoFinal = '' }: Props) {
  return (
    <div className="bg-[#f4f4f4] rounded-[48px] overflow-hidden w-full md:w-[350px] h-[360px] mx-auto p-4">
      <h1 className={`text-${corTitulo} font-extrabold text-4xl text-center p-6`}>{titulo}</h1>
      <p className="mt-1 text-center text-lg md:text-xl lg:text-2xl font-light">
        <span className={`text-${corTitulo} font-extrabold`}>{textoDestacadoInicio}</span>
        {texto}
        <span className={`text-${corTitulo} font-extrabold`}>{textoDestacadoFinal}</span>
      </p>
    </div>
  );
}
