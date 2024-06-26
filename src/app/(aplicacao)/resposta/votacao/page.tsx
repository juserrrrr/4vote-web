import React from 'react';
import SquareInformations from '@/components/elementsEnqVot/SquareInformations';
import SquareQuestion from '@/components/elementsEnqVot/SquareQuestion';
import Butao from '@/components/buttons/button';

const Resposta: React.FC = () => {
  const title = 'VOTAÇÃO';
  const subtitle = 'Eleição do Diretorio Academico de Ecomp';
  const date = new Date();
  const acess = 'Privado';
  const description =
    'Essa é uma eleição aprovada pelo conselho para leger os mais novos menbros do DA do curso de ECOMP.';
  const imageUrl = 'https://picsum.photos/300/104';
  const backgraund = 'flex flex-col w-[1438px] h-[922px] justify-center items-center';
  const container1 = 'w-[1260px] p-5';
  const container2 = 'w-[1260px] p-5';
  const container3 = 'w-[320px] h-[5px] absolute right-0';
  const options = ['BitMasters', 'CyberSquad', 'TechTitans'];
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
          <SquareQuestion
            question={'Quem você escolhe para ser o novo Diretório Acadêmico do curso?'}
            options={options}
          />
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

export default Resposta;
