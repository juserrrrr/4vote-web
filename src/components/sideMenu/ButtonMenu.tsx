import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ButtonMenuProps = LinkProps & {
  children: React.ReactNode;
  icon: React.ReactNode;
  expanded: boolean;
};

function ButtonMenu({ href, children, icon, expanded, ...rest }: ButtonMenuProps) {
  const pathName = usePathname();
  const isPath = pathName === href;

  return (
    <Link
      href={href}
      className={`rounded-lg h-12 flex items-center px-3 ${isPath ? 'bg-corPrincipal text-white' : 'hover:bg-corSecundaria'}`}
      {...rest}
    >
      {icon}
      <span className={`overflow-hidden whitespace-nowrap transition-all ${expanded ? 'w-40 ml-5' : 'w-0'}`}>
        {children}
      </span>
    </Link>
  );
}

export default ButtonMenu;
