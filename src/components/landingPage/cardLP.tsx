interface Props {
  titulo: string;
  corTitulo: string;
  texto: string;
  textoDestacadoInicio?: string;
  textoDestacadoFinal?: string;
  largura?: string;
}

export function CardLP({
  titulo,
  corTitulo,
  texto,
  textoDestacadoInicio = '',
  textoDestacadoFinal = '',
  largura = '[351px]',
}: Props) {
  return (
    <div className="bg-background-rectangle w-[403px] h-[360px]">
      <h1 className={`text-${corTitulo} font-extrabold text-4xl text-center p-6 mt-1`}>{titulo}</h1>
      <p className={`w-${largura} mt-1 ml-1 mr-8 text-center text-3xl font-light`}>
        <span className={`text-${corTitulo} font-extrabold`}>{textoDestacadoInicio}</span>
        {texto}
        <span className={`text-${corTitulo} font-extrabold`}>{textoDestacadoFinal}</span>
      </p>
    </div>
  );
}
