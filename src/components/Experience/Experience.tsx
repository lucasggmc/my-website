'use client';
import { ExperienceCard } from './ExperienceCard';
import * as S from './styled';

const Experience = () => {
  return (
    <S.ExperienceContainer>
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <ul>
        <li>
          <ExperienceCard />
        </li>
      </ul>
    </S.ExperienceContainer>
  );
};

export { Experience };
