/* eslint-disable react/jsx-no-comment-textnodes */
import Answer from '@/components/answers/answer';
import InfoAns from '@/components/infoVoteAns/infoAns';
import VoteCounter from '@/components/voteCounter/VoteCounter';

export default function Enquete() {
  return (
    <div className="mt-20">
      <span className="text-corPrincipal font-bold text-3xl uppercase mx-10">Resultados da enquete</span>
      <div className="bg-white mx-10 mt-6">
        <InfoAns
          title="Enquete teste"
          description={'Testando a tela de resposta de enquete'}
          date={'17/06/2024'}
          hours={'12:00'}
          imageUrl={'imagens/4vote-principal.png'}
        />
      </div>
      <span className="text-corPrincipal font-bold text-1xl uppercase mx-10">
        A energia de Baptista foi de base F no chat
      </span>
      <div className="bg-white mx-10">
        <span className="text-corPrincipal">Pergunta exemplo:</span>
        <Answer
          imageUrl={'imagens/4vote-principal.png'}
          label={'Opção certa'}
          count={50}
          progress={45}
        />
        <Answer
          imageUrl={'imagens/4vote-principal.png'}
          label={'Opção errada'}
          count={3}
          progress={25}
        />
        <Answer
          imageUrl={'imagens/4vote-principal.png'}
          label={'Opção mar ro menos'}
          count={30}
          progress={35}
        />
        <div className="mt-6">
        <VoteCounter votes={100} />
        </div>
        // Pagination component
      </div>
    </div>
  );
}
