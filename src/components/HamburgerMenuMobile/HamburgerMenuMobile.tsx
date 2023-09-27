'use client';
import Link from 'next/link';
import * as S from './styled';
import { useTranslation } from '@/contexts/TranslationContext';

const HamburgerMenuMobile = () => {
  const { siteData } = useTranslation();
  return (
    <S.HamburgerMenuContainer>
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul>
        <li>
          <Link href="/">{siteData.navbarList[0]}</Link>
        </li>
        <li>
          <Link href="#about">{siteData.navbarList[1]}</Link>
        </li>
        <li>
          <Link href="#experience">{siteData.navbarList[2]}</Link>
        </li>
        <li>
          <Link href="#contact">{siteData.navbarList[3]}</Link>
        </li>
        <S.HighlightItem>
          <Link href="/blog">{siteData.navbarList[4]}</Link>
        </S.HighlightItem>
      </ul>
    </S.HamburgerMenuContainer>
  );
};

export { HamburgerMenuMobile };
