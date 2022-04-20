import { Carousel } from 'components/Carousel'
import { Header } from 'components/Header'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { getFirstGames } from 'service/SteamService'

export const Main = () => {
  const [games, setGames] = useState([])

  async function getGames() {
    const data = await getFirstGames()
    setGames(data)
  }

  useEffect(() => {
    getGames()
  }, [])
  return (
    <S.Wrapper>
      <Header />
      <Carousel games={games} />
    </S.Wrapper>
  )
}
