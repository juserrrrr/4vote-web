'use client';
import { useCallback, useState } from 'react';
import SideMenu from '@/components/sideMenu/SideMenu';

function MenuContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <SideMenu
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
      <main
        className={`w-screen h-screen transition-all pt-[70px] ${isOpen ? 'pl-20 pointer-events-none md:pl-64 md:pointer-events-auto md:opacity-100 opacity-50' : 'pl-20 opacity-100'}`}
      >
        <div className="w-full h-full overflow-auto">{children}</div>
      </main>
    </>
  );
}

export default MenuContainer;
