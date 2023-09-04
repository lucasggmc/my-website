'use client';
import { ExperienceCard } from './ExperienceCard';
import data from '../../data/professional-experience.json';
import * as S from './styled';

const Experience = () => {
  console.log({ data });
  return (
    <S.ExperienceContainer>
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <ul>
        {data.experiences.map((experience) => {
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
