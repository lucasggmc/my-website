'use client';
import { RoundedButton } from '../Buttons/RoundedButton';
import Link from 'next/link';
import * as S from './styled';
import { useTranslation } from '@/contexts/TranslationContext';

const About = () => {
  const { siteData } = useTranslation();
  return (
    <S.AboutContainer id="about">
      <h2>{siteData.about.title}</h2>
      <p>{siteData.about.description}</p>
      <Link
        href="/site/Resume-English-Lucas-Carneiro.pdf"
        download="Resume-English-Lucas-Carneiro"
        target="_blank"
        rel="noreferrer"
      >
        <RoundedButton text={siteData.about.buttonText} />
      </Link>
    </S.AboutContainer>
  );
};

export { About };
