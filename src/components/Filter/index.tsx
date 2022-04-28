import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { filterGame, Game } from 'service/SteamService'

type FilterProps = {
  searchName: string
  setGames: (games: Game[]) => void
  setLoading: (value: boolean) => void
  setFilter: (value: string) => void
}

export const Filter = ({
  searchName,
  setGames,
  setLoading,
  setFilter
}: FilterProps) => {
  async function searchGame(e: BaseSyntheticEvent) {
    if (e.target.value === 'default') {
      setGames([])
      setFilter('')
      return
    }
    setLoading(true)
    setFilter(e.target.value)
    const data = await filterGame(e.target.value as string, searchName)
    setGames(data)
    setLoading(false)
  }

  return (
    <S.Container>
      <S.Label>Sort by:</S.Label>
      <S.Select onChange={(e) => searchGame(e)} placeholder="Search">
        <option value="default">Default</option>
        <option value="price">Price</option>
        <option value="title">Title</option>
      </S.Select>
    </S.Container>
  )
}
