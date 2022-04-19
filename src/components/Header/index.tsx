import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Title>STAEM</S.Title>
      <S.ButtonInstall>
        <img src="img/install-icon.svg" alt="install" />
        Install
      </S.ButtonInstall>
    </S.Container>
  )
}
