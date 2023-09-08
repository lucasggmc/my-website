'use client';
import { RoundedButton } from '../Buttons/RoundedButton';
import * as S from './styled';

const Contact = () => {
  return (
    <S.ContactContainer id="contact">
      <h2>CONTACT</h2>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea rows={5} placeholder="Message" />
        <RoundedButton text="SEND" />
      </form>
    </S.ContactContainer>
  );
};

export { Contact };
