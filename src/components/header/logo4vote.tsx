import Image from 'next/image';

export function Logo4vote() {
  return (
    <div className="relative w-32 h-20">
      <Image
        src={'/imagens/4vote-principal.png'}
        alt="Logo"
        fill
        className="object-cover"
      />
    </div>
  );
}
