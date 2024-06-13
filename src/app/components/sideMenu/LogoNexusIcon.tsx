import Image from 'next/image';

function LogoNexusIcon() {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/logoNexus.svg"
        alt="Logo"
        layout="fill"
        className="object-contain"
      />
    </div>
  );
}

export default LogoNexusIcon;
