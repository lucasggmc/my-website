'use client';
import { useTranslation } from '@/contexts/TranslationContext';
import * as S from './styled';

const Footer = () => {
  const { siteData } = useTranslation();
  return (
    <S.FooterContainer>
      {siteData.footerText}
      <span>Lucas Carneiro</span>:D
    </S.FooterContainer>
  );
};

export { Footer };
