import {useState} from 'react'
import { createContext,useContext } from 'react'

const createSongContext = createContext()

const SongDataProvider = ({children}) => {

  const [Song,setSong] = useState( localStorage.getItem('CurrentSong') && JSON.parse(localStorage.getItem('CurrentSong') ) )


  return (
    <createSongContext.Provider value={{Song,setSong}}>
        {children}
    </createSongContext.Provider>
  )
}

const SongDataContext = ()=>useContext(createSongContext)

export {SongDataProvider,SongDataContext}