'use client';
import Modal from '@/components/modalsCodeKey/modal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setOpenModal] = useState(true);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setOpenModal(!isModalOpen)}
        title={'ENTRAR EM VOTAÇÃO/ENQUETE PRIVADA'}
        subtitle={'(Utilize o código da votação/enquete que deseja participar)'}
        instruction={'Insira o código no campo abaixo:'}
      />
    </>
  );
}
