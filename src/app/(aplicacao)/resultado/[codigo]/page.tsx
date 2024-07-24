import SurveyResult from '@/components/surveyResult/SurveyResult';
import { ValidationResult } from '@/components/validation/validationResult';
import { PerguntaDtoResultado } from '@/lib/perguntas';
import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';

// Pega a pesquisa com aquele código
async function getSurvey(code: string): Promise<PesquisaDtoTemp | string> {
  const surveys = await surveyService.getByCode(code);

  if (surveys instanceof Error) {
    return surveys.message;
  }

  if (!surveys.length) {
    return `Nenhuma pesquisa encontrada para o código: ${code}`;
  }

  return surveys[0];
}

async function getVotes(code: string) {
  const questions = await surveyService.getVotes(code);

  return questions;
}

async function Resultado({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const result = await getSurvey(codigo); // Pega os dados da pesquisa
  const perguntas = await getVotes(codigo);
  if (typeof result == 'string' || perguntas instanceof Error) {
    return (
      <div className="w-full h-full p-2 flex justify-center items-center">
        <ValidationResult
          titleInvalid={'Você não é o criador da pesquisa!'}
          isCorrect={false}
        />
      </div>
    );
  }
  const { titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, ...rest } = result;

  return (
    <>
      <SurveyResult
        titulo={titulo}
        codigo={codigo}
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
