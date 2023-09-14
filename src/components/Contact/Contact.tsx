'use client';
import { useTranslation } from '@/contexts/TranslationContext';
import { RoundedButton } from '../Buttons/RoundedButton';
import * as S from './styled';

const Contact = () => {
  const { siteData } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        name: 'teste',
      }),
    });

    // console.log('Rsrsrs', response);
  };

  return (
    <S.ContactContainer id="contact">
      <h2>{siteData.contact.title}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder={siteData.contact.inputName} />
        <input type="email" name="email" placeholder={siteData.contact.inputEmail} />
        <textarea rows={5} placeholder={siteData.contact.inputMessage} />
        <RoundedButton type="submit" text={siteData.contact.buttonText} />
      </form>
    </S.ContactContainer>
  );
};

export { Contact };
