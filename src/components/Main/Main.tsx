/* eslint-disable react-hooks/exhaustive-deps */
import Skeleton from 'react-loading-skeleton'
import ReactLoading from 'react-loading'
import { Carousel } from 'components/Carousel'
import { Header } from 'components/Header'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { Game, getFirstGames, filterGame } from 'service/SteamService'
import { NewTrending } from 'components/NewTrending'
import { SearchInput } from 'components/SearchInput'
import { Filter } from 'components/Filter'
import { CardGame } from 'components/CardGame'
import { useApp } from 'context/AppContext'
import { NextSeo } from 'next-seo'

export const Main = () => {
  const [carouselGames, setCarouselGames] = useState<Game[]>([])

  const {
    games,
    setGames,
    isLoading,
    currentPage,
    setCurrentPage,
    searchName,
    filter,
    moreGames,
    setMoreGames
  } = useApp()

  async function getGames() {
    const data = await getFirstGames()
    setCarouselGames(data)
    setGames(data)
  }

  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((prevValue) => prevValue + 1)
      }
    })
    intersectionObserver.observe(document.querySelector('#sentinel'))

    return () => intersectionObserver.disconnect()
  }, [])

  useEffect(() => {
    async function getData() {
      const data = await filterGame(filter, searchName, currentPage)
      setMoreGames([...moreGames, ...data])
    }
    getData()
  }, [currentPage])

  return (
    <>
      <NextSeo
        title="STAEM"
        description="Project listing PC games available on the Steam platform."
        canonical="https://staem-challenge.vercel.app/"
        openGraph={{
          url: 'https://staem-challenge.vercel.app/',
          title: 'STAEM',
          description:
            'Project listing PC games available on the Steam platform.',
          images: [
            {
              url: 'https://staem-challenge.vercel.app/img/thumbnail.png',
              width: 1263,
              height: 606,
              alt: 'STAEM'
            }
          ],
          site_name: 'STAEM'
        }}
      />
      <S.Wrapper>
        <Header />
        <Carousel games={carouselGames} />
        <NewTrending />
        <S.InputContainer>
          <SearchInput />
          <Filter />
        </S.InputContainer>
        <S.CardsContainer>
          {isLoading && (
            <S.LoadingContainer>
              <ReactLoading type="spin" height={50} width={50} />
            </S.LoadingContainer>
          )}
          {carouselGames.length === 0 && (
            <Skeleton
              className="skeleton"
              width="100%"
              baseColor="#17202d"
              highlightColor="#2e3642"
              height={245}
              count={6}
            />
          )}
          {games.length === 0 &&
            !isLoading &&
            carouselGames.map((game) => <CardGame key={game.id} game={game} />)}
          {games.length > 0 &&
            !isLoading &&
            games.map((game) => <CardGame key={game.id} game={game} />)}
          {moreGames.length > 0 &&
            moreGames.map((game) => <CardGame key={game.id} game={game} />)}
          <div id="sentinel" />
        </S.CardsContainer>
      </S.Wrapper>
    </>
  )
}
