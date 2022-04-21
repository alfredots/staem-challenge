import * as S from './styles'
import { Game } from 'service/SteamService'

type CardGameProps = {
  game: Game
}

export const CardGame = ({ game }: CardGameProps) => {
  return (
    <S.Container>
      <S.Image src={game.image} />
      <S.Details>
        <S.DetailsContent>
          <a href={game.link}>
            <S.Title>{game.title}</S.Title>
          </a>
          <S.Tags>{game.tags.join(', ')}</S.Tags>
          <S.Bar />
        </S.DetailsContent>
        <S.Footer>
          <S.Platform src="img/windows-icon.svg" alt="windows" />
          <S.Price>${game.price}</S.Price>
        </S.Footer>
      </S.Details>
    </S.Container>
  )
}
