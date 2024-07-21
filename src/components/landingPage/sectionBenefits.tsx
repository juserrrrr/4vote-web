import Image from 'next/image';
import { ItemBenefits } from './itemBenefits';
import woman from '@/components/landingPage/assets/happy-woman.svg';
import Link from 'next/link';

export function SectionBenefits() {
  return (
    <section
      id="/beneficios"
      className="min-w-full h-auto bg-gradient-to-r from-[#f0f0f0] to-[#ffffff] flex justify-center items-center"
    >
      <div className="w-full max-w-[1650px] px-4 md:px-8 lg:px-12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-end">
        <div className="flex-1 flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="w-full h-auto max-w-[600px] max-h-[600px] lg:max-w-[700px] lg:max-h-[700px]">
            <Image
              src={woman}
              alt="happy woman"
              layout="responsive"
              width={826}
              height={646}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mb-0">
          <ItemBenefits
            texto={
              <>
                <span className="text-corContraste font-extrabold">100% </span>
                <span className="text-corSecundaria font-extrabold">Gratuito</span>. As melhores funcionalidades do
                mercado na sua mão!
              </>
            }
          />
          <ItemBenefits
            texto={
              <>
                <span className="text-corSecundaria font-extrabold">Compartilhe </span>e
                <span className="text-corContraste font-extrabold"> Convide </span> amigos para participar de suas
                enquetes/ votações on-line.
              </>
            }
          />
          <ItemBenefits
            texto={
              <>
                Expresse sua
                <span className="text-corSecundaria font-extrabold"> Opinião</span>! Pesquise e Participe de enquetes
                públicas.
              </>
            }
          />
          <ItemBenefits
            texto={
              <>
                Entre como
                <span className="text-corSecundaria font-extrabold"> Convidado </span>e
                <span className="text-corContraste font-extrabold"> Descubra </span> mais...
              </>
            }
          />
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-8 pb-8">
            <Link href="inicio">
              <div className="text-white bg-corContraste hover:opacity-90 font-bold text-lg lg:text-xl rounded-full h-12 lg:h-16 w-44 lg:w-60 flex items-center justify-center cursor-pointer">
                entrar como convidado
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
