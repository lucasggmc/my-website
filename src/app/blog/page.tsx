'use client';
import { Navbar } from '@/components';
import * as S from './styled';
import { Articles } from '@/components/Articles';

export default async function Blog() {
  return (
    <>
      <S.BlogContainer>
        <Navbar />
      </S.BlogContainer>
      <S.BlogContent>
        <S.BlogArticles>
          <Articles />
        </S.BlogArticles>
      </S.BlogContent>
    </>
  );
}
