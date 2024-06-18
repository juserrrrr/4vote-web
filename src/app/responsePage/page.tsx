import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import SquareInformations from '@/components/elementsEnqVot/SquareInformations';
import SquareQuestion from '@/components/elementsEnqVot/SquareQuestion';
import Butao from '@/components/buttons/button';

interface ResponsePageProps {
  title?: 'VOTAÇÃO' | 'ENQUENTE';
  subtitle: string;
  date?: Date;
  acess?: 'Privado' | 'Público';
  description: string;
  imageUrl: string;
  question: string;
}
const ResponsePage: React.FC<ResponsePageProps> = ({
  title,
  subtitle,
  date,
  acess,
  description,
  imageUrl,
  question,
}) => {
  const backgraund =
    'flex flex-col w-[1366px] h-[922px] bg-gray-200 justify-center items-center fixed bottom-0 right-0 p-8';
  const container1 = 'w-[1260px] h-[825px] p-5 mt-8';
  const container2 = 'w-[1260px] h-[825px] p-5';
  const container3 = 'w-[255px] h-[10] absolute bottom-0 right-0 mb-4 mr-8 mt-5';

  return (
    <div className={backgraund}>
      <div className={container1}>
        <SquareInformations
          title={title}
          subtitle={subtitle}
          date={date}
          acess={acess}
          description={description}
          imageUrl={imageUrl}
        />
      </div>
      <div className={container2}>
        <SquareQuestion question={question} />
      </div>
      <div className={container3}>
        <Butao
          texto="VOLTAR"
          variante="rounded"
        />
      </div>
    </div>
  );
};

export default ResponsePage;
