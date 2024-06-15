import MenuContainer from '../../components/sideMenu/menuContainer';

export default function LayoutAuthenticated({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-corNeutro">
      <MenuContainer>{children}</MenuContainer>
    </div>
  );
}
