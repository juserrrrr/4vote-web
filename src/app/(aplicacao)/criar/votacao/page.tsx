import React from 'react';
import SquareInfos from '@/components/elementsEnqVot/SquareInfos';
import Butao from '@/components/buttons/button';
import SquareOptions from '@/components/elementsEnqVot/SquareOptions';

const CreatePage: React.FC = () => {
  const title = 'CRIAR VOTAÇÃO';
  const backgraund = 'flex flex-col w-[1438px] h-[1000px] justify-center items-center';
  const container1 = 'w-[1260px] h-[825px] p-3 mb-10';
  const container2 = 'w-[350px] h-[10px] absolute right-0 mt-10 p-5';

  return (
    <div className="flex justify-center items-center">
      <div className={backgraund}>
        <div className={container1}>
          <SquareInfos title={title} />
          <SquareOptions />
          <div className={container2}>
            <Butao
              texto="CRIAR VOTAÇÃO"
              variant="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
