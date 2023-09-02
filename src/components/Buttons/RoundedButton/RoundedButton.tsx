import * as S from './styled';

type Params = {
  text: string;
};

const RoundedButton = ({ text }: Params) => {
  return <S.RoundedButton>{text}</S.RoundedButton>;
};

export { RoundedButton };
