'use client';
import { useRouter } from 'next/navigation';
import ParticipateForm, { FormValues } from './participateForm';
import { ValidationResult } from '../validation/validationResult';
import { useState } from 'react';
import { onSubmitParticipate } from './participateValidateActions';

interface PageParticipateValidateProps {
  title: string;
  description: string;
  type: 'participate' | 'validate';
}

export default function PageParticipateValidate({ title, description, type }: PageParticipateValidateProps) {
  const [validationPage, setValidatoinPage] = useState<JSX.Element | null>();

  const router = useRouter();

  const onSubimitAction = async (data: FormValues) => {
    const formData = new FormData();
    formData.append('code', data.code);

    if (type === 'validate') {
      // const response = await onSubmitValidate(formData);
      if (false) {
        setValidatoinPage(<ValidationResult isCorrect={true} />);
      } else {
        setValidatoinPage(<ValidationResult isCorrect={false} />);
      }
    } else {
      const response = await onSubmitParticipate(formData);
      if (!response.error) {
        return router.push(`/responder/${data.code}`);
      }
      setValidatoinPage(
        <ValidationResult
          titleInvalid="PESQUISA INVÁLIDA"
          isCorrect={false}
        />,
      );
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-2 md:p-20">
      {validationPage ? (
        validationPage
      ) : (
        <div className="bg-white w-[40rem] h-auto sm:h-60 flex flex-col items-center text-corPrincipal rounded-lg drop-shadow-lg p-3">
          <h1 className="uppercase text-2xl font-bold text-center">{title}</h1>
          <p>{description}</p>
          <div className="w-full flex-grow flex justify-center items-center py-2">
            <ParticipateForm onSubmitAction={onSubimitAction} />
          </div>
        </div>
      )}
    </div>
  );
}
