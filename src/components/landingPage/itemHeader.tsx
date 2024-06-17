import Link from 'next/link';

type Props = {
  nome: string;
};

export function ItemHeader({ nome }: Props) {
  return (
    <Link
      href="#"
      className="flex items-center gap-2"
    >
      <span className="text-corPrincipal text-opacity-100 hover:text-opacity-70 transition-all px-6 py-1">{nome}</span>
    </Link>
  );
}