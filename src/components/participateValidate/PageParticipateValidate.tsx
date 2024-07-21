import ParticipateForm from './participateForm';

interface PageParticipateValidateProps {
  title: string;
  description: string;
  type: 'participate' | 'validate';
}

export default function PageParticipateValidate({ title, description, type }: PageParticipateValidateProps) {
  return (
    <div className="w-full h-full flex justify-center items-center p-2 md:p-20">
      <div className="bg-white w-full h-auto sm:h-72 flex flex-col items-center text-corPrincipal rounded-lg drop-shadow-lg p-3">
        <h1 className="uppercase text-2xl font-bold text-center">{title}</h1>
        <p>{description}</p>
        <div className="w-full flex-grow flex justify-center items-center py-2">
          <ParticipateForm type={type} />
        </div>
      </div>
    </div>
  );
}
