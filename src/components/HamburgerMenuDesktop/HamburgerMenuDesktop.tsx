'use client';
import Link from 'next/link';
import * as S from './styled';
import { useTranslation } from '@/contexts/TranslationContext';

const HamburgerMenuDesktop = () => {
  const { siteData } = useTranslation();
  return (
    <S.HamburgerMenuDesktopContainer>
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
    </S.HamburgerMenuDesktopContainer>
  );
};

export { HamburgerMenuDesktop };
