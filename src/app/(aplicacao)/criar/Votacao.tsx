'use client';
import Butao from '@/components/buttons/button';
import SquareInfos from '@/components/elementsEnqVot/SquareInfos';
import SquareOptions from '@/components/elementsEnqVot/SquareOptions';
import { useForm } from 'react-hook-form';

function CriarVotacao() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <SquareInfos
        register={register}
        title="CRIAR VOTAÇÃO"
      />
      <SquareOptions />
      <div className="w-[350px] h-[10px] absolute right-0 mt-10 p-5">
        <Butao
          type="submit"
          texto="CRIAR VOTAÇÃO"
          variant="rounded"
        />
      </div>
    </form>
  );
}

export default CriarVotacao;
