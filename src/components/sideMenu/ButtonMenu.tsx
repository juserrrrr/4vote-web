import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type ButtonMenuProps = LinkProps & {
  icon: React.ReactNode;
  expanded: boolean;
  text: string;
};

function ButtonMenu({ href, icon, expanded, text, ...rest }: ButtonMenuProps) {
  const pathName = usePathname();
  const isPath = useMemo(() => pathName === href, [pathName, href]);

  return (
    <div className="flex flex-row items-center relative group whitespace-nowrap">
      <Link
        href={href}
        className={`rounded-lg h-12 flex items-center px-3 ${isPath ? 'bg-corPrincipal text-white' : 'hover:bg-corSecundaria'}`}
        {...rest}
      >
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? 'w-40 ml-5' : 'w-0'}`}>{text}</span>
      </Link>
      {!expanded && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-6
          bg-corSecundaria text-white text-sm font-bold
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default ButtonMenu;
