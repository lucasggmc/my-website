'use client';
import { Navbar } from '../Navbar';
import * as S from './styled';
import Image from 'next/image';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Navbar />
      <S.ContentContainer>
        <main>
          <h1>
            Hi! I amm <span>Lucas Carneiro</span>
          </h1>
          <h2>
            I am a Full Stack Developer focused on <span>Front End</span>
          </h2>
          <p> I started my career asdasd asdasdasd asdasdas asdas</p>
          <Linkedin size={25} title="linkedin link" />
          {/* <Github size={25} title="github link" /> */}
          <GithubOutline size={25} title="github link" />
        </main>
        <Image src="/site/profile.jpeg" width={200} height={200} alt="Picture of the author" />
      </S.ContentContainer>
    </S.HeaderContainer>
  );
};

export { Header };
