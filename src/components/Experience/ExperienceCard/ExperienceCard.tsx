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
    companyLink: string;
    companyImage: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    technologies: string;
  };
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { currentTranslation } = useTranslation();
  const isLanguageBR = currentTranslation === Language.POR;

  const startDate = experience.startDate ? new Date(experience.startDate) : new Date();
  const moment = isLanguageBR ? 'O momento' : 'Present';
  const timeDistance = experience.endDate
    ? formatDistanceStrict(startDate, new Date(experience.endDate), {
        locale: isLanguageBR ? ptBR : undefined,
      })
    : moment;

  return (
    <S.ExperienceCardContainer>
      <Image
        src={experience.companyImage || '/site/company_default.png'}
        width={300}
        height={300}
        alt="company image"
      />
      <div>
        <h3>{experience.title}</h3>
        <Link href={experience.companyLink}>{experience.companyName}</Link>
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
