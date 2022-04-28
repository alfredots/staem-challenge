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

export async function filterGame(type: string, name: string) {
  try {
    if (type.length > 0) {
      const { data, error } = await supabase
        .from('steam')
        .select('*')
        .ilike('title', `%${name}%`)
        .order(type, { ascending: true })
        .limit(10)

      return data
    } else {
      const { data, error } = await supabase
        .from('steam')
        .select('*')
        .ilike('title', `%${name}%`)
        .limit(10)

      return data
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
