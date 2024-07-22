'use client';

import { useEffect, useMemo, useState } from 'react';
import Pagination from '../pagination/Pagination';
import SquareQuestion from './SquareQuestion';
import SquareInformations from './SquareInformations';
import Butao from '../buttons/button';
import { PesquisaDtoTemp } from '@/lib/pesquisa';
import InputRadio from '../InputCustom/InputRadio';
import { useFieldArray, useForm } from 'react-hook-form';
import Divider from '../divider/Divider';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { onSubimitActionVote } from '../../app/(aplicacao)/resposta/[codigo]/responseAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Selecoes = {
  [key: number]: string; // Use [key: string]: string; if the keys are strings
};

type DataFormVote = {
  opcoesVotadas: { idOption: string }[];
};

const createSchemaProfile = () => {
  return yup.object().shape({
    opcoesVotadas: yup
      .array()
      .required()
      .of(
        yup.object().shape({
          idOption: yup.string().required(),
        }),
      ),
  });
};

function SurveyResponse({
  id,
  titulo,
  descricao,
  dataTermino,
  ehPublico,
  ehVotacao,
  URLimagem,
  perguntas,
}: PesquisaDtoTemp) {
  const schemaVote = useMemo(() => createSchemaProfile(), []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DataFormVote>({
    defaultValues: {
      opcoesVotadas: perguntas.map((_) => ({
        idOption: '',
      })),
    },
    resolver: yupResolver(schemaVote),
  });
  const [selecoes, setSelecoes] = useState<Selecoes>({});
  const handleSelectionChange = (perguntaId: number, opcaoSelecionada: string) => {
    setSelecoes({
      ...selecoes,
      [perguntaId]: opcaoSelecionada,
    });
  };

  const onSubmit = async (data: DataFormVote) => {
    const formData = new FormData();
    formData.append('opcoesVotadas', JSON.stringify(data.opcoesVotadas));
    formData.append('pesquisaId', id.toString());
    const response = await onSubimitActionVote(formData);
    if (response.error) {
      return toast.error(response.error.message);
    } else {
      return toast.success('Voto computado com sucesso!');
    }
  };
  return (
    <div className={'w-full flex flex-col px-2 md:px-10 py-3 gap-3'}>
      <ToastContainer
        autoClose={5000}
        position="bottom-left"
      />
      <div className={'w-full flex flex-col items-center md:items-start'}>
        <SquareInformations
          title={ehVotacao ? 'VOTAÇÃO' : 'ENQUETE'}
          subtitle={titulo}
          date={dataTermino}
          acess={ehPublico ? 'Público' : 'Privado'}
          description={descricao}
          imageUrl={URLimagem ? URLimagem : 'https://picsum.photos/300/104'}
          buttonShareText="Compartilhar Pesquisa"
        />
      </div>
      <form
        className="w-full h-full flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-4xl text-corPrincipal font-bold truncate uppercase">PERGUNTA</h2>
        <div className={'w-full space-y-5'}>
          {perguntas.map((pergunta, indexQuestion) => (
            <div
              key={indexQuestion}
              className={'w-full h-96 bg-white rounded-xl flex flex-col p-4 shadow-xl'}
            >
              <h2 className="uppercase text-corPrincipal font-bold text-md px-2">{pergunta.texto}</h2>
              <Divider />
              <div className="w-full h-full overflow-auto scrollbar-thin p-2">
                <div className="w-full flex flex-col gap-5 ">
                  {pergunta.opcoes.map((opcao, indexOption) => (
                    <InputRadio
                      key={indexOption}
                      {...register(`opcoesVotadas.${indexQuestion}.idOption`)}
                      label={opcao.texto}
                      isChecked={selecoes[pergunta.id] === opcao.texto}
                      onClickBtn={() => handleSelectionChange(pergunta.id, opcao.texto)}
                      value={opcao.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={'w-full flex justify-center md:justify-end'}>
          <Butao
            texto="VOTAR"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="submit"
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
}

export default SurveyResponse;
