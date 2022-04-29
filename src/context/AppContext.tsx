import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'
import { Game } from 'service/SteamService'

type AppContextData = {
  games: Game[]
  setGames: (games: Game[]) => void
  searchName: string
  setSearchName: (searchName: string) => void
  filter: string
  setFilter: (filter: string) => void
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  moreGames: Game[]
  setMoreGames: (moreGames: Game[]) => void
  isLoading: boolean
  setLoading: (value: boolean) => void
}

type AppProviderProps = {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextData)

export function AppProvider({ children }: AppProviderProps) {
  const [games, setGames] = useState<Game[]>([])
  const [moreGames, setMoreGames] = useState<Game[]>([])
  const [searchName, setSearchName] = useState('')
  const [filter, setFilter] = useState('')
  const [isLoading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <AppContext.Provider
      value={{
        games,
        setGames,
        searchName,
        setSearchName,
        filter,
        setFilter,
        currentPage,
        setCurrentPage,
        moreGames,
        setMoreGames,
        isLoading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  return useContext(AppContext)
}
