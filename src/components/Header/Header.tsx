'use client';
import { Navbar } from '../Navbar';
import * as S from './styled';
import Image from 'next/image';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline';
import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

const Header = () => {
  const { siteData } = useTranslation();

  return (
    <S.HeaderContainer>
      <Navbar />
      <S.ContentContainer id="home">
        <main>
          <h1>
            {siteData.header.h1}
            <span>Lucas Carneiro</span>
          </h1>
          <h2>
            {siteData.header.h2}
            <span>Front End</span>
          </h2>
          <p>{siteData.header.description}</p>

          <S.SocialMediaContainer>
            <Link href="https://www.linkedin.com/in/lucas-gabriel96">
              <Linkedin size={20} title="linkedin link" />
            </Link>
            <Link href="https://github.com/lucasggmc">
              <GithubOutline size={20} title="github link" />
            </Link>
          </S.SocialMediaContainer>
        </main>
        <Image src="/site/profile.png" width={1000} height={1000} alt="Picture of the author" />
      </S.ContentContainer>
    </S.HeaderContainer>
  );
};

export { Header };
