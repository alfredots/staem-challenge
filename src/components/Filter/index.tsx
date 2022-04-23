import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { filterByProperty, Game } from 'service/SteamService'

type FilterProps = {
  setGames: (games: Game[]) => void
  setLoading: (value: boolean) => void
}

export const Filter = ({ setGames, setLoading }: FilterProps) => {
  async function searchGame(e: BaseSyntheticEvent) {
    if (e.target.value === 'default') {
      setGames([])
      return
    }
    setLoading(true)
    const data = await filterByProperty(e.target.value as string)
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
