'use client';
import * as S from './styled';
import Image from 'next/image';
import { HamburgerMenuMobile } from '../HamburgerMenuMobile';
import { HamburgerMenuDesktop } from '../HamburgerMenuDesktop';
import { useTranslation, Language } from '@/contexts/TranslationContext';
import Link from 'next/link';

const Navbar = () => {
  const { setCurrentTranslation } = useTranslation();
  return (
    <S.NavContainer>
      <div>
        <HamburgerMenuDesktop />
        <HamburgerMenuMobile />
      </div>
      <span>
        <Link href={{ pathname: '', query: { language: Language.ENG } }}>
          <Image
            src="/site/united-states.png"
            width={50}
            height={50}
            alt="us flag to change language"
            title="change language to English"
            onClick={() => setCurrentTranslation(Language.ENG)}
          />
        </Link>
        <Link href={{ pathname: '', query: { language: Language.POR } }}>
          <Image
            src="/site/brazil.png"
            width={50}
            height={50}
            alt="brazil flag to change language"
            title="change language to Portuguese"
            onClick={() => setCurrentTranslation(Language.POR)}
          />
        </Link>
      </span>
    </S.NavContainer>
  );
};

export { Navbar };
