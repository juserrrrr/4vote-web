import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  Cog8ToothIcon,
  DocumentCheckIcon,
  HomeIcon,
  InboxArrowDownIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

const configMenuItems = {
  className: 'w-7 h-7',
  strokeWidth: 2,
};

export type IMenuOptions = {
  href: string;
  text: string;
  icon: React.ReactNode;
};

interface IMenuItems {
  href: string;
  text: string;
  icon: React.ReactNode;
  options?: IMenuOptions[];
}

export const menuItems: IMenuItems[] = [
  {
    href: '/inicio',
    text: 'Início',
    icon: <HomeIcon {...configMenuItems} />,
  },
  {
    href: '/criar',
    text: 'Criar',
    icon: <PlusCircleIcon {...configMenuItems} />,
    options: [
      { href: 'criar/votacao', text: 'Votação', icon: <DocumentCheckIcon {...configMenuItems} /> },
      { href: 'criar/enquete', text: 'Enquete', icon: <ClipboardDocumentListIcon {...configMenuItems} /> },
    ],
  },
  {
    href: '/participar',
    text: 'Participar',
    icon: <InboxArrowDownIcon {...configMenuItems} />,
  },
  {
    href: '/historico',
    text: 'Histórico',
    icon: <ClockIcon {...configMenuItems} />,
  },
  {
    href: '/validar',
    text: 'Validar voto',
    icon: <ClipboardDocumentCheckIcon {...configMenuItems} />,
  },
  {
    href: '/perfil',
    text: 'Configurações',
    icon: <Cog8ToothIcon {...configMenuItems} />,
  },
];
