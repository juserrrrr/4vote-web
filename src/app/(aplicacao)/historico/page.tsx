import ErrorSurvey from '../../../components/showSurveys/ErrorSurveys';
import ShowSurveys from '../../../components/showSurveys/ShowSurveys';
import { filtersSurvey, surveyService } from '../../../lib/pesquisa';

export const dynamic = 'force-dynamic';

interface FilterSurvey {
  searchParams: filtersSurvey;
}

export const getSurveyFilter = async (searchParams: FilterSurvey) => {
  const response = await surveyService.findFilter(searchParams.searchParams);
  return response;
};
export default async function HomePage(searchParams: FilterSurvey) {
  const data = await getSurveyFilter(searchParams);
  if (data instanceof Error) {
    return ErrorSurvey({ message: data.message });
  }

  return (
    <div>
      <ShowSurveys values={data} />
    </div>
  );
}
