import * as S from './styled';

type Params = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const RoundedButton = ({ text, ...props }: Params) => {
  return <S.RoundedButton {...props}>{text}</S.RoundedButton>;
};

export { RoundedButton };
