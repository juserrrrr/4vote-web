import MenuContainer from '../../components/sideMenu/menuContainer';
import { ProfileProvider } from '../../contexts/profileContext';
import HeaderContainer from '../../components/header/HeaderContainer';
import { userService } from '../../lib/user';
import { cache } from 'react';
import ErrorSurvey from '../../components/showSurveys/ErrorSurveys';

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
  if (data instanceof Error) {
    return ErrorSurvey({ message: data.message });
  }
  return (
    <div className="relative flex flex-col h-full w-full bg-corNeutro">
      <ProfileProvider initialValues={data}>
        <HeaderContainer />
        <MenuContainer>{children}</MenuContainer>
        {modal}
      </ProfileProvider>
      <div id="modal-root" />
    </div>
  );
}
