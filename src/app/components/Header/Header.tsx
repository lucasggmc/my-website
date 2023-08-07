'use client';
import { Navbar } from '../Navbar';
import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Navbar />
      <S.ContentContainer>
        <main>
          <h1>
            Hi! I'm <span>Lucas Carneiro</span>{' '}
          </h1>
          <h2>I am a Full Stack Developer focused on Front End</h2>
          <h3> I started my career asdasd asdasdasd asdasdas asdas</h3>
        </main>
        <span>image</span>
      </S.ContentContainer>
    </S.HeaderContainer>
  );
};

export { Header };
