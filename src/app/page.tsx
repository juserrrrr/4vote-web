import { HeaderLP } from '@/components/landingPage/headerLP';
import { SectionBenefits } from '@/components/landingPage/sectionBenefits';
import { SectionCard } from '@/components/landingPage/sectionCard';
import { SectionHero } from '@/components/landingPage/sectionHero';
import { SectionService } from '@/components/landingPage/sectionService';

export default function Home() {
  return (
    <>
      <HeaderLP />
      <SectionHero />
      <SectionCard />
      <SectionService />
      <SectionBenefits />
    </>
  );
}
