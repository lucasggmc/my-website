import * as S from './styled';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <S.NavContainer>
      <span>logo</span>
      <div>
        <ul>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <Menu size={30} title="menu icon" />
      </div>
    </S.NavContainer>
  );
};

export { Navbar };
