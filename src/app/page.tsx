'use client';

<<<<<<< HEAD
import ResponsePage from './responsePage/page';

export default function HomePage() {
  return (
    <ResponsePage
      title="VOTAÇÃO"
      subtitle="Eleição do Diretorio Academico de Ecomp"
      date={new Date()}
      acess="Privado"
      description="Essa é uma eleição aprovada pelo conselho para leger os mais novos menbros do DA do curso de ECOMP."
      imageUrl="https://picsum.photos/300/104"
      question="Quem você escolhe para ser o novo Diretório Acadêmico do curso?"
    />
=======
import SquareQuestion from '@/components/elementsEnqVot/SquareQuestion';

export default function HomePage() {
  return (
    <div className="flex bg-gray-300 justify-center items-center h-screen">
      <SquareQuestion
      />
    </div>
>>>>>>> 2a754cfca4dbd16b42fa02ae6979db45153292cc
  );
}
