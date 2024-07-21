import SurveyResponse from '@/components/elementsEnqVot/SurveyResponse';
import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';

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

async function Resposta({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const { titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, perguntas } = await getSurvey(codigo);

  return (
    <>
      <SurveyResponse
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

export default Resposta;
