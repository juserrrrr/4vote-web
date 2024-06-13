import SideMenu from '../components/sideMenu/SideMenu';

export default function LayoutAuthenticated({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-corNeutro  ">
      <SideMenu />
      <div className={`flex-grow transition-all ml-64`}>{children}</div>
    </div>
  );
}
