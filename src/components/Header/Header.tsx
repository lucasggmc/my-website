'use client';
import { Navbar } from '../Navbar';
import * as S from './styled';
import Image from 'next/image';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline';
import Link from 'next/link';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Navbar />
      <S.ContentContainer>
        <main>
          <h1>
            Hi! I am <span>Lucas Carneiro</span>
          </h1>
          <h2>
            I am a Full Stack Developer focused on <span>Front End</span>
          </h2>
          <p>
            {' '}
            I'm passionate about technology, I love solving complex problems with lines of code, I'm
            always looking for what's new and keeping myself updated
          </p>

          <S.SocialMediaContainer>
            <Link href="https://www.linkedin.com/in/lucas-gabriel96">
              <Linkedin size={20} title="linkedin link" />
            </Link>
            <Link href="https://github.com/lucasggmc">
              <GithubOutline size={20} title="github link" />
            </Link>
            <Link href="https://www.linkedin.com/in/lucas-gabriel96">
              <Linkedin size={20} title="linkedin link" />
            </Link>
            <Link href="https://github.com/lucasggmc">
              <GithubOutline size={20} title="github link" />
            </Link>
          </S.SocialMediaContainer>
        </main>
        {/* <Image src="/site/profile.jpeg" width={200} height={200} alt="Picture of the author" /> */}
        <Image
          src="/site/zyro-image (3).png"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </S.ContentContainer>
    </S.HeaderContainer>
  );
};

export { Header };
