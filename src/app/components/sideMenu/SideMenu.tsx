import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import ButtonMenu from './ButtonMenu';
import LogoNexusIcon from './LogoNexusIcon';
import { menuItems } from './configsItemsMenu';

function SideMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`h-screen py-7 px-[14px] flex flex-col bg-white text-corPrincipal ${isOpen ? 'w-64' : 'w-20'} transition-all `}
    >
      <div className="mb-14 px-[8px]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon
              className="w-8 h-8"
              strokeWidth={2}
            />
          ) : (
            <Bars3Icon
              className="w-8 h-8"
              strokeWidth={2}
            />
          )}
        </button>
      </div>
      <nav className="flex flex-col gap-2 self-stretch items-start text-lg font-bold ">
        {menuItems.map((item) => (
          <ButtonMenu
            key={item.href}
            href={item.href}
            icon={item.icon}
            expanded={isOpen}
          >
            {item.text}
          </ButtonMenu>
        ))}
      </nav>
      <div className="flex flex-grow items-end align-middle overflow-hidden">
        <LogoNexusIcon />
        <span
          className={`flex justify-center items-center h-12 text-2xl font-bold overflow-hidden transition-all ${isOpen ? 'w-44' : 'w-0'}`}
        >
          NexusTech
        </span>
      </div>
    </div>
  );
}

export default SideMenu;
