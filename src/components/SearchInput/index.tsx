import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { filterGamesByString, Game } from 'service/SteamService'

type SearchInputProps = {
  setGames: (games: any) => void
  setLoading: (value: boolean) => void
}

export const SearchInput = ({ setGames, setLoading }: SearchInputProps) => {
  async function searchGame(e: BaseSyntheticEvent) {
    if (e.target.value.length === 0) {
      setGames([])
      return
    }
    setLoading(true)
    const data = await filterGamesByString(e.target.value as string)
    setGames(data)
    setLoading(false)
  }

  return (
    <S.Container>
      <S.Input onBlur={(e) => searchGame(e)} placeholder="Search" />
    </S.Container>
  )
}
