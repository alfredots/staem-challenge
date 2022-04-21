import { Carousel } from 'components/Carousel'
import { Header } from 'components/Header'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { Game, getFirstGames } from 'service/SteamService'
import { NewTrending } from 'components/NewTrending'
import { SearchInput } from 'components/SearchInput'
import { Filter } from 'components/Filter'
import { CardGame } from 'components/CardGame'

export const Main = () => {
  const [carouselGames, setCarouselGames] = useState<Game[]>([])
  const [games, setGames] = useState<Game[]>([])

  async function getGames() {
    const data = await getFirstGames()
    setCarouselGames(data)
    setGames(data)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <S.Wrapper>
      <Header />
      <Carousel games={carouselGames} />
      <NewTrending />
      <S.InputContainer>
        <SearchInput setGames={setGames} />
        <Filter setGames={setGames} />
      </S.InputContainer>
      <S.CardsContainer>
        {games.length === 0 &&
          carouselGames.map((game) => <CardGame key={game.id} game={game} />)}
        {games.length > 0 &&
          games.map((game) => <CardGame key={game.id} game={game} />)}
      </S.CardsContainer>
    </S.Wrapper>
  )
}
