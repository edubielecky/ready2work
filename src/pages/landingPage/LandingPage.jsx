import FadeInWrapper from '../../components/landingPageComponents/fadeInWrapper/fadeInWrapper';
import SectionTime from '../../components/landingPageComponents/sectionTime/sectionTime';
import SectionTecnologias from '../../components/landingPageComponents/sectionTecnologias/sectionTecnologias';
import SectionImpacto from '../../components/landingPageComponents/sectionImpacto/sectionImpacto';
import SectionComoFunciona from '../../components/landingPageComponents/sectionComoFunciona/sectionComoFunciona';
import SectionBeneficios from '../../components/landingPageComponents/sectionBeneficios/sectionBeneficios';
import SectionDemonstracao from '../../components/landingPageComponents/sectionDemonstracao/sectionDemonstracao';
import SectionSolucao from '../../components/landingPageComponents/sectionSolucao/sectionSolucao';
import SectionProblema from '../../components/landingPageComponents/sectionProblema/sectionProblema';
import SectionHero from '../../components/landingPageComponents/sectionHero/sectionHero';

export default function Index() {
return (
    <>
      <div className="bg-dark-custom min-vh-100">
        <main>
          {/* 1. SECTION HERO (SEMPRE VISÍVEL) */}
          <SectionHero />

          {/* 2. TODAS AS OUTRAS SEÇÕES SÃO ENVOLVIDAS PELO FADEINWRAPPER */}
          <FadeInWrapper>
            <SectionProblema />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <SectionSolucao />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <SectionDemonstracao />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <SectionBeneficios />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <SectionComoFunciona />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <SectionImpacto />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <SectionTecnologias />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <SectionTime />
          </FadeInWrapper>
        </main>
      </div>
    </>
  );
}