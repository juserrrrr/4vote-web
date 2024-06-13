import { HomeIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

const configMenuItems = {
  className: 'w-7 h-7',
  strokeWidth: 2,
};

export const menuItems = [
  {
    href: '/inicio',
    text: 'Início Teste',
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
    icon: <PlusCircleIcon {...configMenuItems} />,
  },
  {
    href: '/historico',
    text: 'Histórico',
    icon: <PlusCircleIcon {...configMenuItems} />,
  },
  {
    href: '/validar',
    text: 'Validar voto',
    icon: <PlusCircleIcon {...configMenuItems} />,
  },
  {
    href: '/configuracoes',
    text: 'Configurações',
    icon: <PlusCircleIcon {...configMenuItems} />,
  },
];
