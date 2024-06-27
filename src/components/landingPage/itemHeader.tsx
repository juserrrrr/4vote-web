import Link from 'next/link';

type Props = {
  nome: string;
  href: string;
};

export function ItemHeader({ nome, href }: Props) {
  return (
    <Link
      href={`#/${href}`}
      className="flex items-center gap-2"
    >
      <span className="text-corPrincipal text-opacity-100 hover:text-opacity-70 transition-all text-2xl font-light px-6 py-1">
        {nome}
      </span>
    </Link>
  );
}
