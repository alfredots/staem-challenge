import * as S from './styles'
import Skeleton from 'react-loading-skeleton'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Game } from 'service/SteamService'
import { useMemo } from 'react'

type CarouselProps = {
  games: Game[]
}

export const Carousel = ({ games }: CarouselProps) => {
  const options = {
    type: 'loop',
    autoplay: true,
    interval: 8000,
    updateOnMove: true,
    padding: '25%',
    throttle: 300,
    arrows: false,
    dots: true,
    breakpoints: {
      1024: {
        autoplay: true,
        padding: '0'
      }
    }
  }

  return (
    <S.Container>
      <Splide aria-label="Main Games" options={options}>
        {games.length !== 0
          ? games.map((game) => (
              <SplideSlide key={game.id}>
                <img src={game.image} alt={game.title} />
              </SplideSlide>
            ))
          : Array(6)
              .fill({})
              .map((value, index) => (
                <SplideSlide key={index}>
                  <Skeleton width="95%" height={300} />
                </SplideSlide>
              ))}
      </Splide>
    </S.Container>
  )
}
