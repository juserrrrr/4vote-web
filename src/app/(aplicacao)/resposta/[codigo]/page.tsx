import SurveyResponse from '@/components/elementsEnqVot/SurveyResponse';
import ErrorSurvey from '@/components/showSurveys/ErrorSurveys';
import { ValidationResult } from '@/components/validation/validationResult';
import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';

async function getSurvey(code: string): Promise<PesquisaDtoTemp | string> {
  const surveys = await surveyService.getByCode(code);

  if (surveys instanceof Error) {
    return surveys.message;
  }

  if (!surveys.length) {
    console.log('Teste');
    return `Nenhuma pesquisa encontrada para o código: ${code}`;
  }

  return surveys[0];
}

async function Resposta({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const result = await getSurvey(codigo);
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
  const { titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, perguntas } = result;

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
