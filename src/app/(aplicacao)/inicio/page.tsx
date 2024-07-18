import { surveyService } from '../../../lib/pesquisa';
import ShowSurveys from '../../../components/showSurveys/ShowSurveys';
import ErrorSurvey from '../../../components/showSurveys/ErrorSurveys';

export const dynamic = 'force-dynamic';

const getSurveyFilter = async () => {
  const response = await surveyService.findFilter();
  return response;
};

export default async function HomePage() {
  const data = await getSurveyFilter();
  if (data instanceof Error) {
    return ErrorSurvey({ message: data.message });
  }
  return (
    <div>
      <ShowSurveys
        isHome
        values={data}
      />
    </div>
  );
}
