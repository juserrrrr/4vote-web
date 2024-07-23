import SurveyResponse from '@/components/elementsEnqVot/SurveyResponse';
import { ValidationResult } from '@/components/validation/validationResult';
import { PesquisaDtoTemp, surveyService } from '@/lib/pesquisa';
import { redirect } from 'next/navigation';

async function getSurvey(code: string): Promise<PesquisaDtoTemp | string> {
  const surveys = await surveyService.getByCode(code);

  if (surveys instanceof Error) {
    return surveys.message;
  }

  if (!surveys.length) {
    return `Nenhuma pesquisa encontrada para o código: ${code}`;
  }
  if (surveys[0].dataTermino < new Date().toISOString()) {
    redirect(`/resultado/${code}`);
  }

  return surveys[0];
}

async function Resposta({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const result = await getSurvey(codigo);
  if (typeof result == 'string') {
    return (
      <div className="w-full h-full p-2 flex justify-center items-center">
        <ValidationResult
          titleInvalid={result}
          isCorrect={false}
        />
      </div>
    );
  }
  const { id, titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, perguntas } = result;

  return (
    <>
      <SurveyResponse
        id={id}
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
