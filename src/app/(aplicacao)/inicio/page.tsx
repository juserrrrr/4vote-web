import { surveyService } from '../../../lib/pesquisa';
import ShowSurveys from '../../../components/showSurveys/ShowSurveys';

async function getSurveyFilter() {
  const response = await surveyService.findFilter();
  return response;
}

export default async function HomePage() {
  const data = await getSurveyFilter();
  return (
    <div>
      <ShowSurveys isHome values={data} />
    </div>
  );
}
