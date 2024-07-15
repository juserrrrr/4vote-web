import ShowSurveys from "../../../components/showSurveys/ShowSurveys";
import { surveyService } from "../../../lib/pesquisa";

async function getSurveyFilter() {
  const response = await surveyService.findFilter();
  return response;
}

export default async function HomePage() {
  const data = await getSurveyFilter();
  return (
    <div>
      <ShowSurveys values={data} />
    </div>
  );
}