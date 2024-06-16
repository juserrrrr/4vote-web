'use client';

import SquareInformations from '@/components/elementsEnqVot/SquareInformations';

export default function HomePage() {
  return (
    <div className="flex bg-gray-300 justify-center items-center h-screen">
      <SquareInformations
        title="VOTAÇÃO"
        subtitle="Apenas um Teste"
        date={new Date()}
        acess="Privado"
        description="Para adicionar espaçamento entre os elementos dentro do seu componente SquareInformations, você pode usar as classes utilitárias de margem (margin) do Tailwind CSS. O Tailwind fornece classes específicas para adicionar margens de diferentes tamanhos em todas as direções..."
        imageUrl="https://picsum.photos/300/104"
      />
    </div>
  );
}
