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
      <div className={`flex-grow transition-all ${isOpen ? 'ml-64' : 'ml-20'}`}>{children}</div>
    </>
  );
}

export default MenuContainer;