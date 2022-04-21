import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { filterGamesByString, Game } from 'service/SteamService'

type FilterProps = {
  setGames: (games: any) => void
}

export const Filter = ({ setGames }: FilterProps) => {
  async function searchGame(e: BaseSyntheticEvent) {
    if (e.target.value.length === 0) {
      setGames([])
      return
    }
    const data = await filterGamesByString(e.target.value as string)
    setGames(data)
  }

  return (
    <S.Container>
      <S.Label>Sort by:</S.Label>
      <S.Select onBlur={(e) => searchGame(e)} placeholder="Search">
        <option value="price">Price</option>
        <option value="title">Title</option>
      </S.Select>
    </S.Container>
  )
}
