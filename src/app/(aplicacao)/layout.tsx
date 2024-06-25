'use client';
import path from 'path';
import { Header } from '../../components/header/header';
import MenuContainer from '../../components/sideMenu/menuContainer';
import { use } from 'react';
import { usePathname } from 'next/navigation';
import Modal from '@/components/modalsCodeKey/modal';

export default function LayoutAuthenticated({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isParticipacao = pathname === '/participar';
  const handleCloseModal = () => {
    window.history.back();
  };
  return (
    <div className="flex h-screen bg-corNeutro">
      <Header usuarioLogado={false} />
      <MenuContainer>{children}</MenuContainer>
      {isParticipacao && (
        <Modal
          closeModal={handleCloseModal}
          isOpen={true}
          title={'TESTE'}
          subtitle={'TESTE 2'}
          instruction={'TESTANTO O MODAL'}
        />
      )}
    </div>
  );
}
