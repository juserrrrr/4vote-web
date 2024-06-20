import { Header } from '../../components/header/header';
import MenuContainer from '../../components/sideMenu/menuContainer';

export default function LayoutAuthenticated({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-corNeutro">
      <Header usuarioLogado={false} />
      <MenuContainer>{children}</MenuContainer>
    </div>
  );
}
