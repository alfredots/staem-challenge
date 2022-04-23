import Skeleton from 'react-loading-skeleton'
import ReactLoading from 'react-loading'
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
  const [isLoading, setLoading] = useState(false)

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
        <SearchInput setGames={setGames} setLoading={setLoading} />
        <Filter setGames={setGames} setLoading={setLoading} />
      </S.InputContainer>
      <S.CardsContainer>
        {isLoading && (
          <S.LoadingContainer>
            <ReactLoading type="spin" height={50} width={50} />
          </S.LoadingContainer>
        )}
        {carouselGames.length === 0 && (
          <Skeleton width="100%" height={245} count={6} />
        )}
        {games.length === 0 &&
          !isLoading &&
          carouselGames.map((game) => <CardGame key={game.id} game={game} />)}
        {games.length > 0 &&
          !isLoading &&
          games.map((game) => <CardGame key={game.id} game={game} />)}
      </S.CardsContainer>
    </S.Wrapper>
  )
}
