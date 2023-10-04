'use client';
import Image from 'next/image';
import * as S from './styled';

export default function Invite() {
  return (
    <S.JulinhaContainer>
      <h1>bao dia minha Joelma do Calypso, bora entortar o caneco(datezinho) sexta ou sabado?</h1>
      <section>
        <h3>Eu</h3>
        <Image src={'/site/juju1.jpeg'} width={300} height={300} alt="juju1" />
      </section>
      <section>
        <h3>buteco qualquer</h3>
        <div>
          <Image src={'/site/skol-mesa.jpeg'} width={300} height={300} alt="juju1" />
          <Image src={'/site/brahma.jpeg'} width={300} height={300} alt="juju1" />
        </div>
      </section>
      <section>
        <h3>Voce</h3>
        <Image src={'/site/juju2.jpeg'} width={300} height={300} alt="juju2" />
      </section>

      <h4>bonus faixa musical</h4>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/4wYwvNPxFyvUwItXJBWSek?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </S.JulinhaContainer>
  );
}
