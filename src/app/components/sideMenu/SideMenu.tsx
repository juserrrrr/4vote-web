import { Bars3Icon, HomeIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const menuItems = [
  {
    href: '/inicio',
    text: 'Início',
    icon: (
      <HomeIcon
        className="w-8 h-8"
        strokeWidth={2}
      />
    ),
  },
  {
    href: '/criar',
    text: 'Criar',
    icon: (
      <PlusCircleIcon
        className="w-8 h-8"
        strokeWidth={2}
      />
    ),
  },
  {
    href: '/participar',
    text: 'Participar',
    icon: (
      <PlusCircleIcon
        className="w-8 h-8"
        strokeWidth={2}
      />
    ),
  },
  {
    href: '/historico',
    text: 'Histórico',
    icon: (
      <PlusCircleIcon
        className="w-8 h-8"
        strokeWidth={2}
      />
    ),
  },
  {
    href: '/validar',
    text: 'Validar voto',
    icon: (
      <PlusCircleIcon
        className="w-8 h-8"
        strokeWidth={2}
      />
    ),
  },
  {
    href: '/configuracoes',
    text: 'Configurações',
    icon: (
      <PlusCircleIcon
        className="w-8 h-8"
        strokeWidth={2}
      />
    ),
  },
];

type ButtonMenuProps = LinkProps & {
  children: React.ReactNode;
  icon: React.ReactNode;
  expanded: boolean;
};

function LogoIcon() {
  return (
    <div className="relative w-14 h-32">
      <Image
        src="/logoNexus.svg"
        alt="Logo"
        layout="fill"
        className="object-contain"
      />
    </div>
  );
}

function ButtonMenu({ href, children, icon, expanded, ...rest }: ButtonMenuProps) {
  const pathName = usePathname();
  const isPath = pathName === href;

  return (
    <Link
      href={href}
      className={`rounded-lg h-14 flex items-center px-3 ${isPath ? 'bg-corPrincipal text-white' : 'hover:bg-corSecundaria'}`}
      {...rest}
    >
      {icon}
      <span className={`overflow-hidden whitespace-nowrap transition-all ${expanded ? 'w-48 ml-5' : 'w-0'}`}>
        {children}
      </span>
    </Link>
  );
}

function SideMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`h-screen py-9 px-3 flex flex-col bg-white text-corPrincipal ${isOpen ? 'w-72' : 'w-20'} transition-all `}
    >
      <div className="flex mb-14 px-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl"
        >
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
      <nav className="flex flex-col gap-4 items-start self-stretch text-2xl font-bold ">
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
        <LogoIcon />
        <span
          className={`flex items-center h-32 text-2xl font-bold overflow-hidden transition-all ${isOpen ? 'w-44   ml-4' : 'w-0'}`}
        >
          NexusTech
        </span>
      </div>
    </div>
  );
}

export default SideMenu;
