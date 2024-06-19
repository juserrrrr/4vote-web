import React from 'react';
import SquareInformations from '@/components/elementsEnqVot/SquareInformations';
import SquareQuestion from '@/components/elementsEnqVot/SquareQuestion';
import Butao from '@/components/buttons/button';

const ResponsePage: React.FC = () => {
  const title = 'VOTAÇÃO';
  const subtitle = 'Eleição do Diretorio Academico de Ecomp';
  const date = new Date();
  const acess = 'Privado';
  const description =
    'Essa é uma eleição aprovada pelo conselho para leger os mais novos menbros do DA do curso de ECOMP.';
  const imageUrl = 'https://picsum.photos/300/104';
  const question = 'Quem você escolhe para ser o novo Diretório Acadêmico do curso?';
  const backgraund = 'flex flex-col w-[1366px] h-[922px] bg-gray-200 justify-center items-center';
  const container1 = 'w-[1260px] p-5';
  const container2 = 'w-[1260px] p-5';
  const container3 = 'w-[1238px] h-[10px] flex justify-end p-3';

  return (
    <div className={'flex justify-center items-center min-h-screen'}>
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
          <div className={container3}>
            <Butao
              texto="VOLTAR"
              variant="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;
