import { supabase } from './client'

export type Game = {
  id: number
  link: string
  image: string
  title: string
  price: string
  tags: string[]
  platforms: string[]
  genre: string
}

const FirstGames = [
  'ELDEN RING',
  'Ghostwire: Tokyo',
  'CHRONO CROSS: THE RADICAL DREAMERS EDITION',
  'MONSTER HUNTER RISE',
  'THE KING OF FIGHTERS XV',
  'Barton Lynch Pro Surfing 2022'
]

export async function getFirstGames() {
  try {
    const { data, error } = await supabase
      .from('steam')
      .select('*')
      .in('title', FirstGames)

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

// export async function filterGamesByString(name: string) {
//   try {
//     const { data, error } = await supabase.from('steam').select('*')

//     return data
//   } catch (error) {
//     console.log(error)
//     return null
//   }
// }

const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const from = page ? page * limit : 0
  const to = page ? from + size - 1 : size - 1

  return { from, to }
}

export async function filterGame(
  type: string,
  name: string,
  currentPage: number
) {
  try {
    const { from, to } = getPagination(currentPage - 1, 10)
    if (type.length > 0) {
      const { data, error } = await supabase
        .from('steam')
        .select('*')
        .range(from, to)
        .ilike('title', `%${name}%`)
        .order(type, { ascending: true })

      return data as Game[]
    } else {
      const { data, error } = await supabase
        .from('steam')
        .select('*')
        .range(from, to)
        .ilike('title', `%${name}%`)

      return data as Game[]
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
