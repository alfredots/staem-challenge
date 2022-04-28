import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { filterGame, Game } from 'service/SteamService'

type SearchInputProps = {
  filter: string
  setGames: (games: any) => void
  setLoading: (value: boolean) => void
  setSearchName: (value: string) => void
}

export const SearchInput = ({
  filter,
  setGames,
  setLoading,
  setSearchName
}: SearchInputProps) => {
  async function searchGame(e: BaseSyntheticEvent) {
    if (e.target.value.length === 0) {
      setGames([])
      return
    }
    setLoading(true)
    setSearchName(e.target.value)
    const data = await filterGame(filter, e.target.value as string)
    setGames(data)
    setLoading(false)
  }

  return (
    <S.Container>
      <S.Input onBlur={(e) => searchGame(e)} placeholder="Search" />
    </S.Container>
  )
}
