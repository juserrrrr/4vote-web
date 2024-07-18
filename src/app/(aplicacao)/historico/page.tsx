import ErrorSurvey from '../../../components/showSurveys/ErrorSurveys';
import ShowSurveys from '../../../components/showSurveys/ShowSurveys';
import { surveyService } from '../../../lib/pesquisa';

const dynamic = 'force-dynamic';

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
      <ShowSurveys values={data} />
    </div>
  );
}
