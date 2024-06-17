import Image from 'next/image';

export function Logo4vote() {
  return (
    <div className="flex items-center">
      <Image
        src={'/imagens/4vote-principal.png'}
        alt="Logo"
        width={166}
        height={166}
      />
    </div>
  );
}