import { formatDistanceStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { Language, useTranslation } from '@/contexts/TranslationContext';

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
  const { currentTranslation } = useTranslation();
  const endDate = experience.endDate ? new Date(experience.endDate) : new Date();
  const timeDistance = formatDistanceStrict(new Date(experience.startDate), endDate, {
    locale: currentTranslation === Language.POR ? ptBR : undefined,
  });
  return (
    <S.ExperienceCardContainer>
      <Image src="/site/object_edge_logo.jpeg" width={300} height={300} alt="company image" />
      <div>
        <h3>{experience.title}</h3>
        <Link href="https://www.linkedin.com/company/object-edge/mycompany/">
          {experience.companyName}
        </Link>
        <span>
          {experience.startDate} {experience.endDate && ` - ${experience.endDate}`} - {timeDistance}
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
