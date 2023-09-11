import * as S from './styled';
import Image from 'next/image';
import { HamburgerMenuMobile } from '../HamburgerMenuMobile';
import { HamburgerMenuDesktop } from '../HamburgerMenuDesktop';

const Navbar = () => {
  return (
    <S.NavContainer>
      <div>
        <HamburgerMenuDesktop />
        <HamburgerMenuMobile />
      </div>
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
    </S.NavContainer>
  );
};

export { Navbar };
