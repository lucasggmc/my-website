'use client';
import Link from 'next/link';
import * as S from './styled';

const HamburgerMenuMobile = () => {
  return (
    <S.HamburgerMenuContainer>
      <input type="checkbox" />

      <span id="first"></span>
      <span></span>
      <span></span>

      <ul>
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
      </ul>
    </S.HamburgerMenuContainer>
  );
};

export { HamburgerMenuMobile };
