import * as S from './styled';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <S.NavContainer>
      <span>
        <Image
          src="/site/united-states.png"
          width={50}
          height={50}
          alt="us flag to change language"
          title="change language to English"
        />
        <Image
          src="/site/brazil.png"
          width={50}
          height={50}
          alt="brazil flag to change language"
          title="change language to Portuguese"
        />
      </span>
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
