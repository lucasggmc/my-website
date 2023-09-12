'use client';
import { useTranslation } from '@/contexts/TranslationContext';
import { RoundedButton } from '../Buttons/RoundedButton';
import * as S from './styled';

const Contact = () => {
  const { siteData } = useTranslation();
  return (
    <S.ContactContainer id="contact">
      <h2>{siteData.contact.title}</h2>
      <form>
        <input type="text" name="name" placeholder={siteData.contact.inputName} />
        <input type="email" name="email" placeholder={siteData.contact.inputEmail} />
        <textarea rows={5} placeholder={siteData.contact.inputMessage} />
        <RoundedButton text={siteData.contact.buttonText} />
      </form>
    </S.ContactContainer>
  );
};

export { Contact };
