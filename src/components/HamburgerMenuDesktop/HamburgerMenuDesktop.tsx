'use client';
import Link from 'next/link';
import * as S from './styled';

const HamburgerMenuDesktop = () => {
  return (
    <S.HamburgerMenuDesktopContainer>
      <li>
        <Link href="#home">HOME</Link>
      </li>
      <li>
        <Link href="#about">ABOUT</Link>
      </li>
      <li>
        <Link href="#experience">EXPERIENCE</Link>
      </li>
      <li>
        <Link href="#contact">CONTACT</Link>
      </li>
    </S.HamburgerMenuDesktopContainer>
  );
};

export { HamburgerMenuDesktop };
