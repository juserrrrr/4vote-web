import SurveyResult from '@/components/surveyResult/SurveyResult';
import { PerguntaDtoResultado } from '@/lib/perguntas';
import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';

// Pega a pesquisa com aquele código
async function getSurvey(code: string): Promise<PesquisaDtoTemp> {
  const surveys = await surveyService.getByCode(code);

  if (surveys instanceof Error) {
    throw new Error(surveys.message);
  }

  if (!surveys.length) {
    throw new Error(`Nenhuma pesquisa encontrada para o código: ${code}`);
  }

  return surveys[0];
}

async function getVotes(code: string): Promise<PerguntaDtoResultado[]> {
  const questions = await surveyService.getVotes(code);

  if (questions instanceof Error) {
    throw new Error(questions.message);
  }

  return questions;
}

async function Resultado({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const { titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, ...rest } = await getSurvey(codigo); // Pega os dados da pesquisa

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
