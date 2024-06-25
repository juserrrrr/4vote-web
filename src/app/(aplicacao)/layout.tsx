import { Header } from '../../components/header/header';
import MenuContainer from '../../components/sideMenu/menuContainer';

export default function LayoutAuthenticated({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen h-full bg-corNeutro">
      <Header usuarioLogado={false} />
      <MenuContainer>{children}</MenuContainer>
      {modal}
      <div id="modal-root" />
    </div>
  );
}
