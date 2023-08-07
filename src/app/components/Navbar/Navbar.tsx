import * as S from './styled';

const Navbar = () => {
  return (
    <S.NavContainer>
      <span>logo</span>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
        <span>icon</span>
      </div>
    </S.NavContainer>
  );
};

export { Navbar };
