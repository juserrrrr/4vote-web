import { FooterLP } from '@/components/landingPage/footerLP';
import { HeaderLP } from '@/components/landingPage/headerLP';
import { SectionBenefits } from '@/components/landingPage/sectionBenefits';
import { SectionCard } from '@/components/landingPage/sectionCard';
import { SectionHero } from '@/components/landingPage/sectionHero';
import { SectionService } from '@/components/landingPage/sectionService';
import { createPesquisa } from '@/lib/pesquisa';

export default function Home() {
  return (
    <>
      <HeaderLP />
      <SectionHero />
      <SectionCard />
      <SectionService />
      <SectionBenefits />
      <FooterLP />
    </>
  );
}
