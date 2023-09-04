import * as S from './styled';

type ExperienceCardProps = {
  experience: {
    companyName: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  };
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <S.ExperienceCardContainer>
      <span>image</span>
      <div>
        <h3>Front End Engineer</h3>
        <span>{experience.companyName}</span>
        <span>
          {experience.startDate} - {experience.endDate} - 2 years
        </span>
        <span>{experience.location}</span>
        <p>{experience.description}</p>
      </div>
    </S.ExperienceCardContainer>
  );
};

export { ExperienceCard };
