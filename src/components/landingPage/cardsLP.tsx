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
  largura = '[370px]',
}: Props) {
  return (
    <div className="bg-backgroun-rectangle w-[403px] h-[360px]">
      <h1 className={`text-${corTitulo} font-extrabold text-4xl text-center p-6 mt-1`}>{titulo}</h1>
      <p className={`w-${largura} mt-1 text-center text-3xl ml-3`}>
        <span className={`text-${corTitulo} font-semibold`}>{textoDestacadoInicio}</span>
        {texto}
        <span className={`text-${corTitulo} font-semibold`}>{textoDestacadoFinal}</span>
      </p>
    </div>
  );
}
