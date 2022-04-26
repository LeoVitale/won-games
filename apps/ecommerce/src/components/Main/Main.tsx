import React from 'react';
import { Description, Illustration, Logo, Title, Wrapper } from './styles';

const Main = () => {
  return (
    <Wrapper>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Title>React Avançado</Title>
      <Description>TypeScript, ReactJS, NextJS e Styled Components</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </Wrapper>
  );
};

export default Main;
