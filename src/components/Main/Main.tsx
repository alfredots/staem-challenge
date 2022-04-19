import * as S from './styles'

export const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo - React Avançado" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illusration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)
