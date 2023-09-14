'use client';
import { useTranslation } from '@/contexts/TranslationContext';
import { RoundedButton } from '../Buttons/RoundedButton';
import * as S from './styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().max(50),
    email: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

const Contact = () => {
  const { siteData } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    if (response?.status === 200) {
      toast.success('Email sent!');
      reset();
    } else {
      toast.error('We have an error sending the email, try again later');
    }
  };

  return (
    <S.ContactContainer id="contact">
      <h2>{siteData.contact.title}</h2>
      <S.FormErrorsArea>
        {!!Object.keys(errors).length && (
          <ul>
            <li>{errors.name?.message}</li>
            <li>{errors.email?.message}</li>
            <li>{errors.message?.message}</li>
          </ul>
        )}
      </S.FormErrorsArea>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} placeholder={siteData.contact.inputName} />

        <input type="email" {...register('email')} placeholder={siteData.contact.inputEmail} />

        <textarea rows={5} {...register('message')} placeholder={siteData.contact.inputMessage} />
        <RoundedButton type="submit" text={siteData.contact.buttonText} />
      </form>
    </S.ContactContainer>
  );
};

export { Contact };
