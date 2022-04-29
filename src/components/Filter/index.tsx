import * as S from './styles'
import { BaseSyntheticEvent } from 'react'
import { useApp } from 'context/AppContext'
import { filterGame } from 'service/SteamService'

export const Filter = () => {
  const {
    searchName,
    currentPage,
    setCurrentPage,
    setFilter,
    setLoading,
    setGames,
    setMoreGames
  } = useApp()

  async function searchGame(e: BaseSyntheticEvent) {
    setCurrentPage(1)
    if (e.target.value === 'default') {
      setFilter('')
      setGames([])
      return
    }
    setLoading(true)
    setFilter(e.target.value)
    const data = await filterGame(e.target.value, searchName, currentPage)
    setGames(data)
    setMoreGames([])
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
