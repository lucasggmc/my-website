'use client';
import * as S from './styled';
import Link from 'next/link';

export default function Blog() {
  return (
    <S.BlogContainer>
      <h1>Coming soon a page with some technical articles I'm writing...</h1>
      <Link href="/">back to home</Link>
    </S.BlogContainer>
  );
}
