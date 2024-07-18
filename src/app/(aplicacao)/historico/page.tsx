import { cache } from 'react';
import ErrorSurvey from '../../../components/showSurveys/ErrorSurveys';
import ShowSurveys from '../../../components/showSurveys/ShowSurveys';
import { surveyService } from '../../../lib/pesquisa';

export const revalidate = false;

export const getSurveyFilter = cache(async () => {
  const response = await surveyService.findFilter();
  return response;
});
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
