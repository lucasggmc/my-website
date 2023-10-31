import { use } from 'react';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';

type Article = {
  id: number;
  title: string;
  description: string;
  social_image: string;
  canonical_url: string;
};

async function getArticles() {
  const ARTICLES_API = 'https://dev.to/api/articles?username=lucascarneiro';
  const res = await fetch(ARTICLES_API);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const dataPromise = getArticles();

const Articles = () => {
  const data = use(dataPromise);

  return (
    <div>
      {data?.map((article: Article) => (
        <Link href={article.canonical_url} key={article.id}>
          <S.BlogArticleItem>
            <Image
              src={article.social_image}
              height={300}
              width={300}
              alt="react, vite and docker icons"
            />
            <S.BlogArticleItemInfo>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </S.BlogArticleItemInfo>
          </S.BlogArticleItem>
        </Link>
      ))}
    </div>
  );
};

export { Articles };
