'use client';
import { RoundedButton } from '../Buttons/RoundedButton';
import * as S from './styled';

const About = () => {
  return (
    <S.AboutContainer>
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
      <RoundedButton text="DOWNLOAD CV" />
    </S.AboutContainer>
  );
};

export { About };
