import { surveyService } from '../../../lib/pesquisa';
import ShowSurveys from '../../../components/showSurveys/ShowSurveys';
import ErrorSurvey from '../../../components/showSurveys/ErrorSurveys';
import { getDataFromSession } from '@/lib/sessions';

export const dynamic = 'force-dynamic';

const getSurveyFilter = async () => {
  const response = await surveyService.findFilter();
  return response;
};

export default async function HomePage() {
  const data = await getSurveyFilter();
  const jwtData = getDataFromSession();
  if (data instanceof Error) {
    return ErrorSurvey({ message: data.message });
  }
  return (
    <div>
      <ShowSurveys
        isHome
        codeUser={jwtData?.sub}
        values={data}
      />
    </div>
  );
}
