import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';

type ExperienceCardProps = {
  experience: {
    title: string;
    companyName: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    technologies: string;
  };
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <S.ExperienceCardContainer>
      <Image src="/site/object_edge_logo.jpeg" width={300} height={300} alt="company image" />
      <div>
        <h3>{experience.title}</h3>
        <Link href="https://www.linkedin.com/company/object-edge/mycompany/">
          {experience.companyName}
        </Link>
        <span>
          {experience.startDate} - {experience.endDate} - 2 years
        </span>
        <S.HighLight>{experience.location}</S.HighLight>
        <p>{experience.description}</p>
        <p>
          <strong>Technologies used: </strong>
          {experience.technologies}
        </p>
      </div>
    </S.ExperienceCardContainer>
  );
};

export { ExperienceCard };
