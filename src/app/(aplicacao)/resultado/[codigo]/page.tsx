import SurveyResult from '@/components/surveyResult/SurveyResult';
import { PerguntaDtoResultado } from '@/lib/perguntas';
import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';

// Método para pegar todos os códigos de pesquisa do banco
export async function generateStaticParams() {
  try {
    const codes = await surveyService.getAllCodes();

    if (codes instanceof Error) {
      throw new Error(codes.message);
    }

    return codes.map((code: { code: string }) => ({
      codigo: code.code,
    }));
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error);
    throw new Error('Falha ao gerar parâmetros estáticos');
  }
}

// Pega a pesquisa com aquele código
async function getSurvey(code: string): Promise<PesquisaDtoTemp> {
  try {
    const surveys = await surveyService.getByCode(code);

    if (surveys instanceof Error) {
      throw new Error(surveys.message);
    }

    if (!surveys.length) {
      throw new Error(`Nenhuma pesquisa encontrada para o código: ${code}`);
    }

    return surveys[0];
  } catch (error) {
    console.error('Erro ao obter a pesquisa:', error);
    throw new Error(`Falha ao obter a pesquisa para o código: ${code}`);
  }
}

async function getVotes(code: string): Promise<PerguntaDtoResultado[]> {
  try {
    const questions = await surveyService.getVotes(code);
    console.log(questions);

    if (questions instanceof Error) {
      throw new Error(questions.message);
    }

    return questions;
  } catch (error) {
    console.error('Erro ao obter os votos:', error);
    throw new Error(`Falha ao obter votos para a pesquisa de código: ${code}`);
  }
}

async function Resultado({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const { titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, ...rest } = await getSurvey(codigo);
  const perguntas = await getVotes(codigo);

  return (
    <>
      <SurveyResult
        titulo={titulo}
        descricao={descricao}
        dataTermino={dataTermino}
        ehPublico={ehPublico}
        ehVotacao={ehVotacao}
        URLimagem={URLimagem}
        perguntas={perguntas}
      />
    </>
  );
}

export default Resultado;
