import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';

export async function generateStaticParams() {
  // Método para pegar os códigos de autenticação
}

export async function getCode(code: string) {
  // Método para pegar o código de autenticação
}

async function Resposta({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const auth = await getCode(codigo);

  return <></>;
}

export default Resposta;
