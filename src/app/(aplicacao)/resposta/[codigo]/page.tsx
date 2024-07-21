import SurveyResponse from '@/components/elementsEnqVot/SurveyResponse';
import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';

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
