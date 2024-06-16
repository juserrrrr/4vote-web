import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  Cog8ToothIcon,
  HomeIcon,
  InboxArrowDownIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

const configMenuItems = {
  className: 'w-7 h-7',
  strokeWidth: 2,
};

export const menuItems = [
  {
    href: '/inicio',
    text: 'Início',
    icon: <HomeIcon {...configMenuItems} />,
  },
  {
    href: '/criar',
    text: 'Criar',
    icon: <PlusCircleIcon {...configMenuItems} />,
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
    href: '/configuracoes',
    text: 'Configurações',
    icon: <Cog8ToothIcon {...configMenuItems} />,
  },
];
