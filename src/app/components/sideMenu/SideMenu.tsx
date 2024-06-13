import { Bars3Icon, HomeIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const menuItems = [
  {
    href: '/inicio',
    text: 'Início',
    icon: <HomeIcon className="w-8 h-8" />,
  },
  {
    href: '/criar',
    text: 'Criar',
    icon: <PlusCircleIcon className="w-8 h-8" />,
  },
  {
    href: '/participar',
    text: 'Participar',
    icon: <PlusCircleIcon className="w-8 h-8" />,
  },
  {
    href: '/historico',
    text: 'Histórico',
    icon: <PlusCircleIcon className="w-8 h-8" />,
  },
  {
    href: '/validar',
    text: 'Validar voto',
    icon: <PlusCircleIcon className="w-8 h-8" />,
  },
  {
    href: '/configuracoes',
    text: 'Configurações',
    icon: <PlusCircleIcon className="w-8 h-8" />,
  },
];

type ButtonMenuProps = LinkProps & {
  children: React.ReactNode;
  icon: React.ReactNode;
};

function ButtonMenu({ href, children, icon, ...rest }: ButtonMenuProps) {
  const pathName = usePathname();
  const isPath = pathName === href;

  return (
    <Link
      href={href}
      className={`rounded-lg h-14 w-full flex items-center pl-3 pr-3 gap-5 ${isPath ? 'bg-corPrincipal text-white' : 'hover:bg-corSecundaria'}`}
      {...rest}
    >
      {icon}
      {children}
    </Link>
  );
}

function SideMenu() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div
      className={`h-screen pt-9 pb-9 pl-3 pr-3 bg-white text-corPrincipal ${isOpen ? 'w-72' : 'w-20'} transition-all duration-300`}
    >
      <div className="flex mb-20 pl-3 pr-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl"
        >
          {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>
      <nav className="flex flex-col gap-8 items-start self-stretch text-2xl font-bold ">
        {menuItems.map((item) => (
          <ButtonMenu
            key={item.href}
            href={item.href}
            icon={item.icon}
          >
            {isOpen && item.text}
          </ButtonMenu>
        ))}
      </nav>
    </div>
  );
}

export default SideMenu;
