'use client';
import Link from 'next/link';
import * as S from './styled';
import { useTranslation } from '@/contexts/TranslationContext';
import { usePathname, useRouter } from 'next/navigation';

const HamburgerMenuDesktop = () => {
  const { siteData } = useTranslation();
  const pathname = usePathname();
  const blogPath = '/blog';

  return (
    <S.HamburgerMenuDesktopContainer>
      <li>
        <Link href="/">{siteData.navbarList[0]}</Link>
      </li>
      {pathname !== blogPath && (
        <>
          <li>
            <Link href="#about">{siteData.navbarList[1]}</Link>
          </li>
          <li>
            <Link href="#experience">{siteData.navbarList[2]}</Link>
          </li>
          <li>
            <Link href="#contact">{siteData.navbarList[3]}</Link>
          </li>
        </>
      )}
      <S.HighlightItem>
        <Link href={blogPath}>{siteData.navbarList[4]}</Link>
      </S.HighlightItem>
    </S.HamburgerMenuDesktopContainer>
  );
};

export { HamburgerMenuDesktop };
