interface ErrorSurveyProps {
  message: string;
}

function ErrorSurvey({ message }: ErrorSurveyProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center uppercase text-corPrincipal text-lg">
      <h1 className="font-bold">{message}</h1>
      <h1>{'Tente novamente mais tarde :('}</h1>
    </div>
  );
}

export default ErrorSurvey;
