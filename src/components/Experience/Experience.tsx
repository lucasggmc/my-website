'use client';
import { useTranslation } from '@/contexts/TranslationContext';
import { ExperienceCard } from './ExperienceCard';
import * as S from './styled';

const Experience = () => {
  const { siteData } = useTranslation();

  return (
    <S.ExperienceContainer id="experience">
      <h2>{siteData.professionalExperience.title}</h2>
      <ul>
        {siteData.professionalExperience.experiences.map((experience: any) => {
          return (
            <li key={experience.companyName}>
              <ExperienceCard experience={experience} />
            </li>
          );
        })}
      </ul>
    </S.ExperienceContainer>
  );
};

export { Experience };
