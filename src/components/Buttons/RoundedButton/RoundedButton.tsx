import * as S from './styled';

type Params = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const RoundedButton = ({ text, ...props }: Params) => {
  return (
    <div>
      <S.RoundedButton {...props}>{text}</S.RoundedButton>;
    </div>
  );
};

export { RoundedButton };
