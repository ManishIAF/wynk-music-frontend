import {useState} from 'react'
import { createContext,useContext } from 'react'

const createSongsContext = createContext()

const SongsDataProvider = ({children}) => {

  const [Songs,setSongs] = useState(null)


  return (
    <createSongsContext.Provider value={{Songs,setSongs}}>
        {children}
    </createSongsContext.Provider>
  )
}

const SongsDataContext = ()=>useContext(createSongsContext)

export {SongsDataProvider,SongsDataContext}