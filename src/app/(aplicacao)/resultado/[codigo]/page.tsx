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

async function getVotes(code: string): Promise<PerguntaDtoResultado[]> {
  const questions = await surveyService.getVotes(code);

  if (questions instanceof Error) {
    throw new Error(questions.message);
  }

  return questions;
}

async function Resultado({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const result = await getSurvey(codigo); // Pega os dados da pesquisa
  if (typeof result == 'string') {
    return (
      <div className="w-screen h-screen p-2 flex justify-center items-center">
        <ValidationResult
          titleInvalid={result}
          isCorrect={false}
        />
      </div>
    );
  }
  const { titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, ...rest } = result;
  const perguntas = await getVotes(codigo);

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
