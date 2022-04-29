import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { useApp } from 'context/AppContext'
import { filterGame } from 'service/SteamService'

export const SearchInput = () => {
  const {
    filter,
    currentPage,
    setCurrentPage,
    setSearchName,
    setLoading,
    setGames,
    setMoreGames
  } = useApp()
  async function searchGame(e: BaseSyntheticEvent) {
    setCurrentPage(1)
    if (e.target.value.length === 0) {
      setSearchName('')
      setGames([])
      return
    }
    setLoading(true)
    setSearchName(e.target.value)
    const data = await filterGame(filter, e.target.value, currentPage)
    setGames(data)
    setMoreGames([])
    setLoading(false)
  }

  return (
    <S.Container>
      <S.Input onBlur={(e) => searchGame(e)} placeholder="Search" />
    </S.Container>
  )
}
