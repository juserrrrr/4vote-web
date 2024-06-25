import Image from 'next/image';
import { ItemBenefits } from './itemBenefits';
import woman from '@/components/landingPage/assets/happy-woman.svg';

export function SectionBenefits() {
  return (
    <section
      id="/beneficios"
      className="bg-white min-w-max h-[645px] bg-no-repeat bg-center bg-cover"
    >
      <div className="w-full max-w-auto px-[15px] mx-auto flex justify-between">
        <div>
          <Image
            src={woman}
            alt="happy woman"
            width={826}
            height={646}
          />
        </div>
        <div>
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
          <a href="inicio">
            <button
              className="text-white bg-corContraste hover:opacity-90 font-extrabold text-3xl rounded-full h-[84px]
          w-[244px] ml-[230px] mr-6 mt-2"
            >
              entrar como convidado
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
