import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { filterGamesByString, Game } from 'service/SteamService'

type SearchInputProps = {
  setGames: (games: any) => void
}

export const SearchInput = ({ setGames }: SearchInputProps) => {
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
      <S.Input onBlur={(e) => searchGame(e)} placeholder="Search" />
    </S.Container>
  )
}
