'use client';
import { RoundedButton } from '../Buttons/RoundedButton';
import Link from 'next/link';
import * as S from './styled';
import { useTranslation } from '@/contexts/TranslationContext';

const About = () => {
  const { currentTranslation } = useTranslation();
  return (
    <S.AboutContainer id="about">
      <h2>ABOUT ME</h2>
      <p>
        As a Full Stack developer focused on Front End I have been working with Web development
        since 2016, during this period I participated in building and maintaining several
        applications from different segments, financial, educational, and e-commerce. In that time
        as a developer, I have always been challenged to learn new technologies and generate good
        results in a short time. My main stack is Javascript | TypeScript, React, NextJs, Jest,
        RecoilJs, Apollo, GRAPHQL | REST, and NodeJs, at the moment I have been studying Docker,
        Kubernetes, CI/CD and AWS.
      </p>
      <Link
        href="/site/Resume-English-Lucas-Carneiro.pdf"
        download="Resume-English-Lucas-Carneiro"
        target="_blank"
        rel="noreferrer"
      >
        <RoundedButton text="DOWNLOAD CV" />
      </Link>
    </S.AboutContainer>
  );
};

export { About };
