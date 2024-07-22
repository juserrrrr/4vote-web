import MenuContainer from '../../components/sideMenu/menuContainer';
import { ProfileProvider } from '../../contexts/profileContext';
import HeaderContainer from '../../components/header/HeaderContainer';
import { userService } from '../../lib/user';
import { cache } from 'react';
import { sessionService } from '@/lib/sessions';
import { redirect } from 'next/dist/server/api-utils';

export const dynamic = 'force-dynamic';

const getProfile = cache(async () => {
  const response = await userService.findMe();
  return response;
});

export default async function LayoutAuthenticated({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const data = await getProfile();

  const logoutAction = async () => {
    'use server';
    sessionService.deleteSessionToken();
  };

  return (
    <div className="relative flex flex-col h-full w-full bg-corNeutro">
      <ProfileProvider initialValues={data instanceof Error ? undefined : data}>
        <HeaderContainer onLogout={logoutAction} />
        <MenuContainer>{children}</MenuContainer>
        {modal}
      </ProfileProvider>
      <div id="modal-root" />
    </div>
  );
}
