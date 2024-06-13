'use client';
import { useCallback, useState } from 'react';
import SideMenu from '../components/sideMenu/SideMenu';

export default function LayoutAuthenticated({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <div className="flex h-screen">
      <SideMenu
        isOpen={isOpen}
        onToggle={handleToggle}
      />
      <div className={`bg-corNeutro flex-grow transition-all ${isOpen ? 'ml-64' : 'ml-20'}`}>{children}</div>
    </div>
  );
}
