import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { IMenuOptions } from './configsItemsMenu';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type ButtonMenuProps = LinkProps & {
  icon: React.ReactNode;
  expanded: boolean;
  text: string;
  options?: IMenuOptions[];
  toggleSidebar: () => void;
};

function ButtonMenu({ href, icon, expanded, text, options, toggleSidebar, ...rest }: ButtonMenuProps) {
  const [isExpandMore, setIsExpandMore] = useState<boolean>(false);
  const pathName = usePathname();
  const isPath = useMemo(() => pathName === href, [pathName, href]);

  useEffect(() => {
    !expanded && setIsExpandMore(false);
  }, [expanded]);

  const onClickButton = () => {
    options && setIsExpandMore((prev) => !prev);
    !expanded && toggleSidebar();
  };
  return (
    <div className="flex flex-row items-center relative group whitespace-nowrap z-20">
      <div className="flex flex-col">
        <Link
          href={options ? '#' : href}
          onClick={options ? onClickButton : undefined}
          className={`rounded-lg h-12 flex items-center px-3 ${isPath ? 'bg-corPrincipal text-white' : 'hover:bg-corSecundaria'}`}
          {...rest}
        >
          {icon}
          <span
            className={`flex flex-row items-center overflow-hidden justify-between transition-all ${expanded ? 'w-40 ml-5' : 'w-0'}`}
          >
            {text}
            {options && expanded && (
              <ChevronDownIcon
                strokeWidth={3}
                className={`w-5 h-5 ml-2 transition-transform ${isExpandMore && 'rotate-180'}`}
              />
            )}
          </span>
        </Link>
        {expanded && options && (
          <div className={`overflow-hidden transition-all duration-200 ${isExpandMore ? 'max-h-80' : 'max-h-0'}`}>
            {options.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className={`ml-6 rounded-lg h-12 flex items-center px-3  ${isPath ? 'bg-corPrincipal text-white' : 'hover:bg-corSecundaria'}`}
              >
                {option.icon}
                <span className={`overflow-hidden transition-all ${expanded ? 'w-32 ml-5' : 'w-0'}`}>
                  {option.text}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
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
